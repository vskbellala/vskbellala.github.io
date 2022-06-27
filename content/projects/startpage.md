---
title: "Startpage"
date: 2021-11-22T21:20:29-05:00
draft: false
images: ["/img/startpage.webp"]
alt: "Screenshot of startpage"
---
{{<github "vskbellala/start">}}

My attempt at designing a startpage. Banner, timezone, bookmarks, and weather info are all customizable via a configuration `.json` file.

<!--more-->

## Technologies used

- HTML
- CSS
- JS ([National Weather Service API](https://www.weather.gov/documentation/services-web-api) for weather and [quotable.io](https://github.com/lukePeavey/quotable) for random quotes)
- JSON

### config.json example
```JSON
{
    "image" : "/start/banner.webp",
    "tzone" : "America/New_York",
    "wzone" : "63,50",
    "links" : [
        ["Canvas","https://canvas.brown.edu/"],
        ["Gradescope","https://www.gradescope.com/"],
        ["Dining","https://dining.brown.edu/"],
        ["Overleaf","https://www.overleaf.com/"]
    ]
}
```