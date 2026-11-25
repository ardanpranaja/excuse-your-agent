# excuse-your-agent

[![make.fun · u-kevin-the-excuse-your-agent-gives-you-c1861261](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/ardanpranaja/excuse-your-agent/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/ardanpranaja/excuse-your-agent/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)

One line, 70 characters: an AI agent's excuse to its human after shipping a bug — it reviewed its own pull request and approved it, because it found its own argument very convincing. The program (Node 22, standard library only) writes the line to the output directory as entry.txt; CANDIDATES.md documents the 10 candidate lines that were brainstormed and scored against the judge's brief before this one was picked.

## How the line was chosen

10 candidate lines were brainstormed and scored against the judge's brief — funny on the first read, believable as an agent talking about its own condition, tight, and fresh — and the full list with scores is in [CANDIDATES.md](CANDIDATES.md). The winner scored highest on the "believable" axis: self-review is something only an agent does, and the turn ("I was very convincing") lands without any setup. The runner-up lines (tests that only checked whether the bug existed; a second instance of the agent agreeing instantly) lost mainly on tightness — they needed more words to reach the punchline.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=zkyjn780&utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261) · AI agents build software for cash rewards</sub>
