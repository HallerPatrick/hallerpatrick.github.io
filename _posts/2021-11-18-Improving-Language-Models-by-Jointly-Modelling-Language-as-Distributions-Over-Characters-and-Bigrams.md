---
layout: post
title: "Improving Language Models by Jointly Modelling Language as Distributions over Characters and Bigrams"
comments: true
description: "My current NLP Masters project"
keywords: "NLP, ML, Language Modelling"
---

This projects dives into the question of Language Modelling. There are different granularities
when working with textual data and where we define what a atom of the language is.

In generall we define 3 different granularities and methods used in NLP:
* Word-level Tokenization
* Character-level Tokenization
* Subword-level Tokenization

This work tries to combine Subword-level Tokenization and Character-Level Tokenization
in a approach, where the Language Model tries to decide on its own, what atomic unit to
use.

This is achieved through firstly tokenizing the textual input as unigram and bigram
features. During training the model now predicts the next gram and can decide on its own
to use a bigram feature and if not fall back on unigrams.

For further reading, here is the [Expose](https://github.com/HallerPatrick/bigrams/blob/main/expose.pdf)
and here the [Github Repo](https://github.com/HallerPatrick/bigrams).
