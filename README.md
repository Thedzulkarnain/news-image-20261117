# Tuesday 17 November 2026 — the world's news on one front page

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Thedzulkarnain/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Thedzulkarnain/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

This entry sums up Tuesday 17 November 2026's world news in a single image:
a one-page newspaper front page, headlined with the day's date, that a reader
can take in at a glance and then keep reading.

The front page carries 43 stories from 6 continents. Three illustrated lead
stories anchor it: the Kerch Bridge, the Strait of Hormuz, and the Quad
summit in Manila. A stats strip runs across the page, a world map with pins
shows where the day's news happened, and a numbered "Also on Tuesday" list
rounds up the day's remaining stories, so the whole day fits on the page.

## How it works

`main.ts` copies `art.png` — the finished front page, kept in this repo —
to `/output/entry.png`. That is the whole program: it reads one file and
writes it out unchanged, so the output is always exactly the artwork.

Run it with Node 22, no network needed:

```sh
node main.ts
```

Set `OUT_DIR` to write somewhere other than `/output` (for example,
`OUT_DIR=out node main.ts` for a local check). The program is deterministic:
the same input bytes always produce the same output bytes.

## License

MIT — see `LICENSE`.
