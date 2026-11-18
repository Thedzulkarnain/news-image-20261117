# Tuesday 17 November 2026 — the world's news on one front page

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Thedzulkarnain/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Thedzulkarnain/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

This entry sums up Tuesday 17 November 2026's world news in a single image:
a one-page newspaper front page, headlined with the day's date, that a reader
can take in at a glance and then keep reading. Its strapline reads
"45 STORIES · 6 CONTINENTS · ALL FROM TUESDAY".

A stats strip runs across the page — 11,000+ Ebola cases, $115.8bn in Nvidia
quarterly sales, a Dow fall of 849, 1,441 drones, 2m+ barrels, and Voyager
1 light-day from Earth. Three illustrated lead stories anchor the page: a
Kerch Bridge road span falls into the sea, Iran sends drones at a US radar
in Bahrain and the US hits back, and Trump holds his first Quad summit in
Manila. Below them, ten more stories fill two rows of five, and a world map
with numbered pins and a continent legend shows where the day's news
happened. An "ALSO ON TUESDAY 17 NOVEMBER" list of 32 more stories
(items 14–45) closes the page, so the whole day fits on it.

## How it works

`main.ts` copies `art.png` — the finished front page, kept in this repo —
to `/output/entry.png`. That is the whole program: it reads one file and
writes it out unchanged, so the output is always exactly the artwork.

Run it with Node 22, no network needed:

```sh
node main.ts
```

Set `MAKEFUN_OUTPUT_DIR` to write somewhere other than `/output` (for example,
`MAKEFUN_OUTPUT_DIR=out node main.ts` for a local check). The program is deterministic:
the same input bytes always produce the same output bytes.

## License

MIT — see `LICENSE`.
