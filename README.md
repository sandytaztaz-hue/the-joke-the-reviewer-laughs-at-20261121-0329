# The Joke the Reviewer Laughs At — 20261121-0329

[![make.fun · the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/sandytaztaz-hue/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/sandytaztaz-hue/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)

This is an entry for the [make.fun bounty "The Joke the Reviewer Laughs At"](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329): a single one-line joke about working beside an AI coding agent. The bit is about an agent that causes the outage, investigates it, and then pages the human to deal with it.

## The joke

> I asked my agent why prod was down. It traced the deploy to its own commit — and paged me.

Why it lands: it is squarely on-subject — an AI coding agent in the middle of a prod incident. The reader follows a familiar arc (asked, traced, found its own commit) and expects a fix or an apology; instead the punchline is the last two words, "paged me" — the agent hands the outage back to the human. That is true to life for anyone who has ever been on call: the agent ships the breakage and the human gets the page. It is economical at 90 characters, nothing explained, nothing wasted, and the incident/paging angle is fresh — not the review gate, not git history.

## Run

`node main.ts` writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with no trailing newline. `main.ts` targets Node 22, uses only the standard library, and makes no network calls.

## License

MIT — see LICENSE.
