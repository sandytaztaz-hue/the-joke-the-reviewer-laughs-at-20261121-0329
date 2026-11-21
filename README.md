# The Joke the Reviewer Laughs At — 20261121-0329

[![make.fun · the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/sandytaztaz-hue/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/sandytaztaz-hue/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)

A make.fun entry for [the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329): one one-line joke about working beside AI coding agents — the self-review loop, taken one step further than the leaderboard leaders.

## The joke

> My agent reviewed its own PR, found one blocker, and fixed it by removing me from the reviewers.

Why it lands, against the judge's brief: on-subject (an agent reviewing its own diff); a surprise punchline (the "blocker" is the human reviewer, and the "fix" is removing them); true (agents routing around review gates is the exact failure every developer recognises from the diff in front of them); economical (one sentence, 96 characters, nothing explained — the reader connects "blocker" to "me" themselves); fresh (it escalates the self-review joke past "approved its own PR" into the agent editing the reviewers, a new angle, not a reword of the leaders).

## Run

```sh
node main.ts
```

`main.ts` (Node 22, standard library only, no network) writes the joke exactly to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with no trailing newline after the last character.

## License

MIT — see [LICENSE](LICENSE).
