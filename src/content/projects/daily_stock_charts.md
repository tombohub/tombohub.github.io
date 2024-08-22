---
title: Daily Stock Charts
date: 2021-01-25
tags:  [web]
link: https://tombohub.github.io/daily-stock-charts/
repo: https://github.com/tombohub/stock-charts/tree/master/src/frontend
tech: [React]
---
Displaying stock price chart for each day of the 6 months. Usual way we use stock charts is to have all days in one big chart. This time I wanted to compare daily movements to easilly see if I can spot some recuring patterns. To do that I needed to have all the daily charts side by side, for easy comparison. After testing many chart libraries, only library that was able to reproduce 150 charts on one page was recharts.js. All others were slow so I had to use some kind of lazy loading, fetching in backround and other techniques. Unfortunately, recharts.js doesn't have candlestick chart.
