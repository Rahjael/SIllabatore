# Sil-la-ba-to-re

### A tool for syllable division in the Italian language


This is a simple tool I wrote during a weekend just for the lulz. Coming up with an algorithm proved much harder than I thought it would be, but this is just because some dividing rules are a bit weird.

It is not 100% safe but it works fine most of the time.


***Known issues***

Handling the syllables "ia" and "ai" wrecked my brain until I concluded that it's probably impossible to define a general rule programmatically. The issue here is that these two letters are both a diphthong (undividable vocals) and a hiatus (vocals you must divide), and this depends only on their pronunciation, which varies a lot and I wasn't able to find a way to code this using a single algorithmic procedure.

I may come back to this in the future :man_shrugging:
