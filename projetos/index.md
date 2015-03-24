---
layout: page
title: Projetos
modified: 2014-07-31T13:23:02.362000-04:00
excerpt: "Projetos desenvolvidos."
---

{% include _toc.html %}

## Projetos

REFAZER
Minimal Mistakes now requires [Jekyll](http://jekyllrb.com/) 2.2+. Make sure to run `gem update jekyll` if you aren't on the latest version or `gem install jekyll` if this is your first time installing it.

If you are creating a new Jekyll site using Minimal Mistakes follow these steps:

1. Fork the [Minimal Mistakes repo](http://github.com/mmistakes/minimal-mistakes/fork).
2. Clone the repo you just forked and rename it.
3. [Install Bundler](http://bundler.io) `gem install bundler` and Run `bundle install` to install all dependencies (Jekyll, [Jekyll-Sitemap](https://github.com/jekyll/jekyll-sitemap), [Octopress](https://github.com/octopress/octopress), etc)
4. Update `config.yml`, add navigation, and replace demo posts and pages with your own. Full details below.

If you want to use Minimal Mistakes with an existing Jekyll site follow these steps:

1. [Download Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes/archive/master.zip) and unzip.
2. Rename `minimal-mistakes-master` to something meaningful ie: `new-site`
3. Run `bundle install` to install all dependencies (Jekyll, [Jekyll-Sitemap](https://github.com/jekyll/jekyll-sitemap), [Octopress](https://github.com/octopress/octopress), etc)
4. Remove demo posts/pages and replace with your own posts, pages, and any other content you want to move over.
5. Update posts' and pages' YAML to match variables used by Minimal Mistakes. Full details below.
6. Update `_config.yml` and add navigation links. Full details below. 

**Pro-tip:** Delete the `gh-pages` branch after cloning and start fresh by branching off `master`. There is a bunch of garbage in `gh-pages` used for the theme's demo site that I'm guessing you won't want.
{: .notice}

---

## UJL

If BALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBA `jekyll build` and `jekyll serve` throw errors you may have to run Jekyll with `bundled exec` instead.

> In some cases, running executables without bundle exec may work, if the executable happens to be installed in your system and does not pull in any gems that conflict with your bundle.
>
>However, this is unreliable and is the source of considerable pain. Even if it looks like it works, it may not work in the future or on another machine.

{% highlight text %}
bundle exec jekyll build

bundle exec jekyll serve
{% endhighlight %}

---

## Plataforma

BALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBABALBALABLBALLBALBALBALLBAHow Minimal Mistakes is organized and what the various files are. All posts, layouts, includes, stylesheets, assets, and whatever else is grouped nicely under the root folder. The compiled Jekyll site outputs to `_site/`.

---

## Questions?

Found a bug or aren't quite sure how something works? By all means Ping me on Twitter [@mmistakes](http://twitter.com/mmistakes) or [file a GitHub Issue](https://github.com/mmistakes/minimal-mistakes/issues/new). And if you make something cool with this theme feel free to let me know.

---

## License

This theme is free and open source software, distributed under the MIT License. So feel free to use this Jekyll theme on your site without linking back to me or including a disclaimer. 

