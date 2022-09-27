---
title: "Photos"
date: 2022-09-26T14:07:03-04:00
draft: false
description: "Film Photography by Shri"
---
Film photography is a hobby of mine. Here are some of the photos I've taken so far.

{{<spoiler "Equipment">}}
- Camera: Polaroid 3200AF Panoramic for 35mm film
- Film stocks: Kodak Gold 200 (expired), Fujifilm Superia 400
- Developed at [The Camera Werks](http://thecamerawerks.com/index.html) in Providence, RI.
{{</spoiler>}}

{{<album film>}}



{{<rawhtml>}}
<style>
#photos {
  /* Prevent vertical gaps */
  line-height: 0;
  /*width: 100vw;*/
  -webkit-column-count: 4;
  -webkit-column-gap:   0px;
  -moz-column-count:    4;
  -moz-column-gap:      0px;
  column-count:         4;
  column-gap:           0px;  
}

#photos img {
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
  display: inline-block !important;
}

@media (max-width: 1200px) {
  #photos {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
@media (max-width: 1000px) {
  #photos {
  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  }
}
@media (max-width: 800px) {
  #photos {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
@media (max-width: 400px) {
  #photos {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  }
}

</style>
{{</rawhtml>}}