---
title: It's rocket science
createdAt: 2020-12-23T10:00:00+02
description: >- 
    It's simply rocket science, can't be that hard, _right_?
---

A while ago, I discovered this fun little browser game called [Orbity](https://orbity.io/).
In this game, you control a small rocket, and your goal is to explore the universe and earn achievements.
Pretty simple stuff.

Now as a programmer, I was interested in how something like this could be programmed.
They seem to have implemented some kind of custom Javascript engine for this game.
Anyway, the point is: I wanted to create my own copy of this game to explore the challenges the devs over at 2Dio Studio have solved.

## Humble Beginnings

To start things off, I created a new Vue.js project.

_Wait, isn't Vue.js absolutely overkill for this small project?_ 

Yes, dear reader, using Vue.js (at least in this instance) may be a bit overkill.
But I got to simple reasons why I used it anyway:

1. I found a library which lets me control a canvas using the sweet reactive properties
2. I am lazy and didn't want to start from scratch

The library I wanted to use is called [Konva](https://konvajs.org/).
It provides a high-level API for creating animated canvases while using object-oriented programming.
Konva itself has a [vue plugin](https://konvajs.org/docs/vue/index.html) (also one for React, if you're into that kind of stuff).

## Building a rocket

After project initialization, I began creating a basic "Game" component, which just holds the canvas:

```vue
<template>
    <v-stage id="main_stage" ref="main_stage" :config="configKonva">
      <v-layer>
        <v-circle :config="planetConfig"></v-circle>
      </v-layer>
      <v-layer>
        <v-arrow :config="rocketConfig"></v-arrow>
      </v-layer>
    </v-stage>
</template>
```

As you can see, I also included two layers:
the first layer contains a circle, which is used to represent a planet.
The second layer is used for the rocket which will be controlled by the player.
Additionally, the "v-stage" element (which is the root element for Konvas canvas wrapper) has its own config, and a handler for the "resize" event attached.
More on that later.

To display some simple shapes, I used the `config` attribute of Konvas elements:

```vue
<script>
const degToRad = Math.PI / 180;
const bigG = 6.6742;

const planetRadius = 75;
const planetMass = 10;
const rocketRadius = 5;
const rocketMass = 0.1;
const launchSpeed = 6;

export default {
  computed: {
    configKonva() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    
    planetConfig() {
      return {
        x: this.configKonva.width / 2,
        y: this.configKonva.height / 2,
        fill: 'blue',
        radius: planetRadius,
      };
    },
    
    rocketConfig() {
      return {
        points: [0, 0],
        x: this.rocketPosition.x,
        y: this.rocketPosition.y,
        fill: 'green',
        rotation: this.rocketPosition.phi,
        pointerWidth: 4 * rocketRadius / 5,
        pointerLength: rocketRadius,
      }
    },
  }
}
</script>
```

Breaking everything down:

- the `const` definitions at the top of the script will also be referenced in later code snippets 
- `configKonva` just tells the canvas which width and height it should have.
  In this case, it should fill the whole window.
- `planetConfig` tells our circle where it should appear (in the middle of the canvas) and some other stylistic things.
- `rocketConfig` draws an arrow head at the rockets position and rotation.

So far so good.
Next, I introduced a "game tick", which is invoked every 20ms (could also be less often):

```vue
<script>
export default {
  destroyed() {
    clearInterval(this.gameTickInterval);
  },
  
  mounted() {
    this.gameTickInterval = setInterval(() => this.gameTick(), 20)
  },
  
  data()
  {
    return {
      gameTickInterval: -1,
    }
  },

  methods: {
    gameTick() {
      // executed once every 10ms
    }
  }
}
</script>
```

The whole game logic will happen in this `gameTick` method.
The first thing I wanted to replicate was the rocket sitting on the planets surface, waiting to get launched into space.
To achieve this, I added a variable to my components data called `rocketLanded` with a default value of `true`:

```vue

<script>
export default {
  data()
  {
    return {
      rocketLanded: true,
    }
  },
}
</script>
```

Then, in the `gameTick`, I can check if the rocket is landed on the planet and update the rockets position according to the planets rotation:

```vue
<script>
export default {
  methods: {
    gameTick() {
      this.planetRotation = (this.planetRotation + 0.1) % 360;

      if (this.rocketLanded) {
        this.rocketPosition.x = this.planetConfig.x + Math.cos(this.planetRotation * degToRad) * (planetRadius + rocketRadius / 2);
        this.rocketPosition.y = this.planetConfig.y + Math.sin(this.planetRotation * degToRad) * (planetRadius + rocketRadius / 2);
        this.rocketPosition.phi = this.planetRotation;
      } else {
        this.rocketPosition.x += this.rocketVelocity.x;
        this.rocketPosition.y += this.rocketVelocity.y;

        this.rocketPosition.phi += this.rocketVelocity.phi;
      }
    }
  }
}
</script>
```

At first, the planet is rotated 0.1° every game tick. Easy.

The position calculation when the rocket is landed might look a bit intimidating at first, but don't worry.
I shall explain what kind of witchcraft is going on here.
Let's look at the formula in detail:

```
this.rocketPosition.x = this.planetConfig.x + Math.cos(this.planetRotation * degToRad) * (planetRadius + rocketRadius / 2);
^                       ^                     ^                            ^             ^
1                       5                     3                            2             4
```

1. We want to set the x position of the rocket.
2. `this.planetRotation` is saved in degrees, so in this step, we convert them to radians.
3. `Math.cos` gives us the coordinate on the x-axis for the given angle (value between -1 and 1).
4. Since we want the position on the surface of the planet, we need to add the radii of the planet and rocket to the position offset.
5. Lastly, we add the planets x coordinate

Almost the same formula works for the y coordinate: just swap out every `x` with `y` and the `Math.cos` with `Math.sin`, since you want the offset on the y-axis instead of the x-axis.

A quick test confirms that the rocket now sits on the planet and rotates with it.

## Liftoff!

The next step was to implement some kind of user input, so the rocket can lift off the surface and be controllable.

To achieve this, I attached event handlers for `window.onkeydown` and `window.onkeyup`:
```vue
<script>
export default {
  created() {
    window.addEventListener("resize", this.resizeCanvas);
    window.addEventListener("keydown", this.keydown);
    window.addEventListener("keyup", this.keyup);
  },
  
  destroyed() {
    window.removeEventListener("resize", this.resizeCanvas);
    window.removeEventListener("keydown", this.keydown);
    window.removeEventListener("keyup", this.keyup);
    
    clearInterval(this.gameTickInterval);
  },
  
  methods: {
    keydown(e) {
      switch (e.keyCode) {
        case 87: // w
          if (this.rocketLanded) {
            this.rocketLanded = false;
            this.rocketVelocity.x = this.planetToRocket.x * launchSpeed;
            this.rocketVelocity.y = this.planetToRocket.y * launchSpeed;
            this.rocketPosition.phi = this.planetRotation + 90;
          } else {
            this.boost = true;
          }
          break;
        case 65: // a
          if (!this.rocketLanded)
            this.rotate = -1;
          break;
        case 68: // d
          if (!this.rocketLanded)
            this.rotate = 1;
          break;
        case 83: // s
          if (!this.rocketLanded)
            this.rotate = 0;
          break;
      }
    },
    
    keyup(e) {
      switch (e.keyCode) {
        case 87: // w
          this.boost = false;
          break;
        case 65: // a
        case 68: // d
        case 83: // s
          if (!this.rocketLanded)
            this.rotate = null;
          break;
      }
    }
  },
}
</script>
```

For the liftoff, I am using a variable called `this.planetToRocket`.
This variable contains a vector which originates at the center of the planet and points to the center of the rocket.
This is useful for distance calculation and determining the normal vector of the planet at the location of the rocket _on the planet_ (basically answering "which way is up?").

The variable `this.rocketLanded` indicates that a liftoff is required in order to leave the planet.
"Liftoff" in this case means giving the rocket a velocity in the direction of the normal vector (`this.planetToRocket`) with some initial velocity.

## Future

Initially, I wanted to write a lot more about the details on how the gravity works and energy loss what controls I implemented for the rocket (like tracking the trajectory/reverse).
But in the end I was too distracted playing the game and I just wanted to finish this blog entry.
Maybe I'll extend this post in the future.

---

And now: go play it yourself and make sure to send me a screenshot of your flight-path ([@_ricardoboss](https://twitter.com/_ricardoboss)):

[rocket-science.ricardoboss.de](https://rocket-science.ricardoboss.de/)
