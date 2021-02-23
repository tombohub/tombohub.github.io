---
title: Stock Charts
tags: web
link_href: https://tombohub.github.io/stock-charts/
source_href: https://github.com/tombohub/stock-charts/tree/master/src/frontend
tech: React
date: 2021-01-25
---
Displaying stock price chart for each day of the 6 months. Usual way we use stick charts is to have all days in one big chart. This time I wanted to compare daily movements to easilly see if I can spot some recuring patterns. To do that I needed to have all the daily charts side by side, for easy comparison. After testing many chart libraries, only library that was able to reproduce 150 charts on one page was recharts.js. All other were slow so I had to use some kind of lazy loading, fetching in backround and other techniques. Unfortunately, recharts.js doesn't have candlestick chart.
