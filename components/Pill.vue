<script setup lang="ts">
import type { PillType } from '~/models/PillType'
import { computed } from 'vue'

interface Props {
  pill: PillType
}

const props = defineProps<Props>()

const backgroundClass = computed(() =>
  props.pill
    .replace('#', 's')
    .replace('++', 'pp')
    .replace('.', '')
    .toLowerCase(),
)
</script>

<template>
  <span :class="['pill', backgroundClass]">
    {{ pill }}
  </span>
</template>

<style scoped lang="scss">
@use 'sass:math';

.pill {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  border-radius: 50em;

  font-size: 0.75em;
  line-height: 1.3;
  font-weight: 600;

  $pill-types: (
    'php': #4f5d95,
    'cs': #178600,
    'net': #6d409d,
    'aspnet': #1267ab,
    'blazor': #592c8c,
    'js': #f0db4f,
    'vue': #3fb984,
    'java': #b07219,
    'powershell': #0253c4,
    'ts': #2b7489,
    'wpf': #3a79d3,
    'dart': #2cb7f6,
    'flutter': #44d1fd,
    'android': #30d780,
    'ios': #87d747,
    'xamarin': #3498db,
    'symfony': #e5e8e4,
    'bash': #47b353,
    'docker': #2496ed,
    'mysql': #e68a10,
    'postgresql': #2f5b8b,
    'mssql': #e02923,
    'cpp': #0179c3,
    'step': #2c9fcb,
    'delphi': #eb2634,
    'sqlite': #3093ce,
  );

  /// Returns the luminance of `$color` as a float (between 0 and 1)
  /// 1 is pure white, 0 is pure black
  /// @param {Color} $color - Color
  /// @return {Number}
  /// @link http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef Reference
  @function luminance($color) {
    $colors: (
      'red': red($color),
      'green': green($color),
      'blue': blue($color),
    );

    @each $name, $value in $colors {
      $adjusted: 0;
      $value: math.div($value, 255);

      @if $value < 0.03928 {
        $value: math.div($value, 12.92);
      } @else {
        $value: math.div(($value + 0.055), 1.055);
        $value: pow($value, 2.4);
      }

      $colors: map-merge(
        $colors,
        (
          $name: $value,
        )
      );
    }

    @return (map-get($colors, 'red') * 0.2126) +
      (map-get($colors, 'green') * 0.7152) + (map-get($colors, 'blue') * 0.0722);
  }

  @function color-contrast($clr) {
    @if luminance($clr) < 0.2 {
      @return white;
    }

    @return black;
  }

  @each $name, $color in $pill-types {
    &.#{$name} {
      $newValue: darken(desaturate($color, 10%), 10%);
      background-color: $newValue;
      color: color-contrast($newValue);
    }
  }
}
</style>
