# Chaos or Divines?

**Chaos or Divines?** is a web app that answers a simple question for Path of Exile players: "Should I exchange Currency X for Chaos Orbs or Divine Orbs?"

For example, imagine you've been [Stacked Deck](https://www.poewiki.net/wiki/Stacked_Deck) farming, you've amassed 500 of them, and you're ready to use them to buy some new gear. You check the Currency Exchange, and see that people are buying each Stacked Deck for 1.5 Chaos Orbs, so you sell your 500 Stacked Decks for 750 Chaos Orbs.

Then, you go to buy a new pair of Gloves on the Trade site. You find one you like for 5 Divine Orbs, so you go back to the Currency Exchange to convert your Chaos Orbs into Divine Orbs. The ratio is 130 Chaos Orbs per Divine Orb, so you exchange 650 Chaos Orbs for 5 Divine Orbs and buy your Gloves.

Then, you get a sinking feeling. You go back to the Currency Exchange and check how many Stacked Decks it costs to buy 1 Divine Orb directly. Turns out, Divine Orbs are trading for Stacked Decks at a ratio of 75:1. You could've bought 5 Divine Orbs for 375 Stacked Decks, but by using Chaos Orbs as an intermediate, you wasted 125 Stacked Decks.

We've all made this mistake before, and **Chaos or Divines?** saves you from ever making it again. After opening **Chaos or Divines?**, you enter three ratios:

- `Chaos Orbs : Your Currency`
- `Divine Orbs : Your Currency`
- `Divine Orbs : Chaos Orbs`

**Chaos or Divines?** will tell you exactly how many Chaos Orbs _or_ Divine Orbs to sell your currency for in order to make the most profit.

## Stack

- React
- TypeScript
- Vite
- Tailwind v4
- Shadcn
