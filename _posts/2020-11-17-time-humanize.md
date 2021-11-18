---
layout: post
title: "Rust Crate: time-humanize"
comments: true
description: "A crate to display duration of time in a human readable format"
keywords: "library, crate, time"
---


A rust crate that displays duration in a human readable format.

This project is a port of [chrono-humanize](https://github.com/imp/chrono-humanize-rs) and
now has 0 dependencies.

The reason for creation is that the famous time crate [chrono](https://github.com/chronotope/chrono) will no longer
be maintained. And because I work at a Open Source project [onefetch](https://github.com/o2sh/onefetch),
that relies on `chrono` and `chrono-humanize`, which display time duration
in a easy to understand/read format, I decided to port `chrono-humanize`,
that just uses `std::time`;

Here how to use it:

```rust
use std::time::Duration;
use time_humanize::HumanTime;


let duration = Duration::from_secs(60);
let human_time = HumanTime::from(duration);
println!("{}", human_time);
// Output: "in one minute"


let human_time = HumanTime::from(-60);
println!("{}", human_time);
// Output: "a minute ago"
```


You can find it [here](https://github.com/HallerPatrick/time-humanize)!
