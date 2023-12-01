---
title: Progress update for age-of-aincrad.com
createdAt: 2020-12-06T18:00:00+02
description: >-
    This is a progress update on my work for the new homepage for age-of-aincrad.com.
---

As the year progresses further, so do I with the new homepage for age-of-aincrad.com.
In my last post, I explained how I came to working on the new website and what the (then) current state was.

In this post, I want to let you know what issues I encountered since then and how I solved them.

## Task Management

Internally at Team Cardinal (the developers of the Age of Aincrad game), we use Trello and Discord to communicate and organize tasks.
This is also the way Leo (community lead) and Blacky/Katy (the project leads) tell us web developers what they want for the website.

Now since I've been working on the new website, we have been using GitHub.
As you may know, GitHub has its own issue/task management, including "projects" and milestones and so on.
Personally, I really like to use those systems because it allows you to create intuitive workflows and automate things as much as possible (which in turn minimizes need for manual labor).

A problem which could arise when using both systems is that they can become out of sync, meaning the issue on GitHub is closed while a card on Trello remains in "ToDo" (or vice versa).
To mitigate this, we decided to separate the different systems based on who is interested in the information provided by each system.

So if the project leads want a new feature or adjust the design, they can open a new Trello card.
We will then open a new (more technically detailed) GitHub issue with a link to this Trello card and work on the issue while discussing everything technical in the GitHub issue.
The Trello card must then be moved according to the state of the issue.

## Automatic Deployment

Part of the things I wanted for the new website is an automatic deployment system, so we don't have to manually build or move files around.

I set up a workflow with GitHub actions, which simply executes `npm run build` after a push event.
This way, we can automatically check if the current codebase is even able to be built.
Afterwards, all available tests are executed using `npm run test`.

Now we need a way to deploy the latest version.
To achieve this, I installed [olipo186/Git-Auto-Deploy](https://github.com/olipo186/Git-Auto-Deploy) on the deployment server.
Here is the description in the current README.md:

> Git-Auto-Deploy consists of a small HTTP server that listens for Webhook requests sent from GitHub, GitLab or Bitbucket servers. This application allows you to continuously and automatically deploy your projects each time you push new commits to your repository.

So it seems to be perfect for the use-case.
The setup was pretty simple:

- create a new subdomain which will be called by GitHub with the webhook events
- create a reverse proxy to forward the requests to the Git-Auto-Deploy service
- create a deployment script which builds and deploys the website on the server
- configure the Git-Auto-Deploy service to only deploy on certain events

The deployment script was a challenge because I am not very familiar with bash scripting.
In the end I managed to create a pretty stable script which checks the environments `npm` and `node` versions and uses symlinking for a zero-downtime deployment.
I ran into a problem where the script wouldn't be executable, because it was missing the `x` permission.

_EDIT_: I wanted to make the script publicly available, so [here is a gist of it](https://gist.github.com/ricardoboss/de05920c5296e851490743d03d1158c8).

This could be fixed by changing my git config to respect file modes:
```bash
$ git config --global core.filemode true
```

Then, I needed to add the `x` flag and commit the script:

```bash
$ chmod +x ./bin/deploy.sh
$ git commit -am "Add +x flag to deploy script"
```

Afterwards the service happily ran my script with no problems.

Next I had to decide on which events would trigger a deployment.
I went for the `check_suite` event, which is triggered every time a workflow starts or completes.
Additional filters for branches and the `success` state of the `check_suite` where added, and the configuration was complete.

## Conclusion and further development

The next steps in the development of the website will prepare it for it's initial release (hopefully late January).
This means filling everything with content, fixing open issues, adding required features, testing everything and so on.
There is still a lot to do, but I think we can make it until early next year.

Again, I will post a new update here once we have made significant progress.
Thanks for reading!
