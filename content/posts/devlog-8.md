+++
comments = true
date = 2021-01-16T15:00:00Z
draft = true
images = ""
title = "Devlog 8"

+++
Big upgrades are being constantly delivered to the OpenSuspect project!

This week, it's me, Nice Micro, the initial mastermind behind starting the game, who's delivering you the news on the development progress. It has been a busy two weeks, and there was no rest for the coders, and big chunks of new code have been pulled into the main repository.

# New updates

## Task information display

Thanks to the great work of Damjan94, now the tasks assigned to the player appear in a dedicated task view HUD element. This might seem like a small addition, but it came together with a big bucket of improvement for the task system, which finally allows for the assignment of global tasks - tasks that have to be performed by anyone, but doesn't matter who, and their state is synced to all the players. Alongside this, the engine allows personally distributed tasks, too, which don't synchronize, so anyone who gets the task, has to complete it.

![Task system update](/uploads/screenshot-from-2021-01-16-14-08-14.png "Task system update")

The task display shows the personal tasks under the player's name, and they turn green on completion.

## Code cleanup

Not every important change is visible to the end user on a first glance, but if necessary, refactoring the code as soon as possible is important to keep future development efforts effective. In this early stage, when brand new functionality is added to the code base every day, spaghetti-like code cause merge conflicts, and merge conflicts cause sleepless nights and takes away resources from working on important stuff.

These last two weeks, Cukmekerb did a great job rationalizing the code structure at some key parts, so new contributors will have an easier way to navigate the ever growing source code. Along side with the occasional code cleanup, we strive to have a rigorous code review system, so every new contribution is integrated in a way that will keep the game development less painful in the future.

## Character customization

The work on the  character customization has not ended, based on the great initial work of Jngo102, I continued polishing the code, while also fiddling with the graphical assets to make the customization experience seamless.

![](/uploads/randomchar.gif)

A randomize button has also been introduced to create a random character with random skin- and hair colors for the lazy, or uninspired players. The color-selection became png image based, so the color maps can be easily switched out whenever it will be needed to be done.

# What does the future hold?

This weekend we are holding a general meeting for both contributors and interested outside parties, which might bring us in new directions.

As of now, the game design team worked out three tasks in detail, which are going be implemented using the synced task system.

As always, new contributors are warmly welcome!