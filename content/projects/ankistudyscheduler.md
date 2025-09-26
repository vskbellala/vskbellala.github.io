---
title: "Anki Study Scheduler"
date: 2025-09-26T12:56:13-04:00
draft: false
images: ["/img/ankistudyscheduler.webp"]
alt: "Screenshot of addon"
noshow: true
---

{{<github "vskbellala/AnkiStudyScheduler">}}

An Anki addon designed to help you plan your long-term study schedules. Calculate the daily new card rate needed to meet a deadline, or predict your finish date based on a set pace. You can even apply the calculated settings directly to your decks!

This addon was made using Google's **Gemini 2.5 Pro**.
<!--more-->

## Features

  * **Two Calculation Modes:**
      * **Calculate Daily Rate:** Determine how many new cards you need to study each day to finish a deck within a specific timeframe.
      * **Calculate End Date:** Predict the exact date you will finish a deck based on a consistent daily study pace.
  * **Flexible Scheduling:** Choose whether to include or exclude weekends from your study plan.
  * **Direct Deck Integration:**
      * Apply the calculated "New cards/day" limit directly to a selected deck's options with a single click.
      * Includes a confirmation step to prevent accidental changes.
  * **Seamless Anki Experience:**
      * Access the scheduler globally from the `Tools` menu.
      * Access it for a specific deck via the gear icon in the Deck Browser, which automatically pre-selects that deck for you.
  * **Detailed Output:** Optionally view the full day-by-day schedule to see the plan in detail.

![Screenshot of addon](/img/ankistudyscheduler.webp)

## A Note on AI Collaboration

This addon was developed using **Google's Gemini 2.5 Pro**. The entire project was built through a conversational development process with the AI.

## Purpose & Disclaimer

This addon was primarily built for my personal study workflow. I am sharing it here in the spirit of open source, in case it is useful to others in the Anki community.

While it has been tested for my own use cases, it may contain bugs or not cover all edge cases. Feel free to open an issue in the GitHub repository if you find any problems or have a suggestion!