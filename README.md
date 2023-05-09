# Large Parks
Website for Chicago's large public parks

## Description
Large Parks is a simple static website for large public parks overseen by the Chicago Park District. It was built using HTML, CSS and JavaScript, and submitted as a solution to pset8 - Homepage of CS50x: Intro to Computer Science (HarvardX, May 2023).

<picture><img alt="Shelfie screenshot 1" src="images/large-parks_1.png?raw=true"></picture>

More screenshots below.

## Learning Objectives

### Requirements
_[Assignment brief](https://cs50.harvard.edu/x/2023/psets/8/homepage/) for CS50x's pset8 - Homepage (as of May 2023)_

Build a simple homepage using HTML, CSS, and JavaScript. The website must:
* Contain at least four different .html pages, at least one of which is index.html \(the main page of your website\), and it should be possible to get from any page on your website to any other page by following one or more hyperlinks.
* Use at least ten \(10\) distinct HTML tags besides \<html\>, \<head\>, \<body\>, and \<title\>. Using some tag \(e.g., \<p\>\) multiple times still counts as just one \(1\) of those ten!
* Integrate one or more features from Bootstrap into your site. Bootstrap is a popular library \(that comes with lots of CSS classes and more\) via which you can beautify your site.
* Have at least one stylesheet file of your own creation, styles.css, which uses at least five (5) different CSS selectors \(e.g. tag \(example\), class \.example\), or ID \(\#example\)\), and within which you use a total of at least five \(5\) different CSS properties, such as font-size, or margin.
* Integrate one or more features of JavaScript into your site to make your site more interactive. For example, you can use JavaScript to add alerts, to have an effect at a recurring interval, or to add interactivity to buttons, dropdowns, or forms. Feel free to be creative!
* Ensure that your site looks nice on browsers both on mobile devices as well as laptops and desktops.

### Personal Goals
Apart from what was to be gained from implementing the requirements, this project was used as a vehicle to further learn and/or practice the following:

* Working with Google Maps API
* Git
* Writing .md files

## Getting Started

### Dependencies

* None

### Usage

Clone it!
```
$ git clone https://github.com/ggeerraarrdd/large-parks.git
```

Make sure you have [http-server](https://formulae.brew.sh/formula/http-server) installed, otherwise:
```
$ brew install http-server
```

Go into the project directory and run the command:
```
$ http-server -c-1
```

Open one of the URLs after `Available on`.

### Notes on Google Maps
For the embedded maps to work, you need to use your own API Key. Before you can create one, you will need to create a Google Cloud project, for which you need a Google Cloud account.
* [Set up a Google Cloud account](https://cloud.google.com)
* [Set up your Google Cloud project](https://developers.google.com/maps/documentation/javascript/cloud-setup)
* [Using API Keys](https://developers.google.com/maps/documentation/javascript/get-api-key)

Then replace YOUR_API_KEY every .html file, except index.html, with your own.

```
<script>(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
                ({ key: "YOUR_API_KEY", v: "beta" });</script>
```

## Author(s)
* [@ggeerraarrdd](https://github.com/ggeerraarrdd/)

## Version History
* 0.1
    * May 6, 2023
    * Initial Release

## Future Work
* Create a dynamic version using a web framework (Flask, Django)
* Add aditional large parks

## License
* [MIT License](https://github.com/ggeerraarrdd/large-parks/blob/main/LICENSE)

## Acknowledgments
* Design inspirations from the works of [Span Studio](https://span.studio/)
* For Google Maps API:
   * [Add a Google Map with a Marker to Your Website](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)
   * [Call function initmap with parameters in gmaps api](https://stackoverflow.com/questions/47104164/call-function-initmap-with-parameters-in-gmaps-api)
   * [Add double quotes to string which is stored in variable](https://stackoverflow.com/questions/44795264/add-double-quotes-to-string-which-is-stored-in-variable)
* For the flexible Card UI:
   * [Solving Problems With CSS Grid and Flexbox: The Card UI](https://webdesign.tutsplus.com/tutorials/solving-problems-with-css-grid-and-flexbox-the-card-ui--cms-27468)
* For the font used for "Urbs in Hortus"
   * [Konkhmer Sleokchher](https://fonts.google.com/specimen/Konkhmer+Sleokchher) designed by Suon May Sophanith
* For writing README files
   * Curated [list](https://github.com/matiassingers/awesome-readme) of READMEs on Github
   * [How to write a good README for your GitHub project?](https://bulldogjob.com/readme/how-to-write-a-good-readme-for-your-github-project)

## Screenshots
<picture><img alt="Shelfie screenshot 1" src="images/large-parks_2.png?raw=true"></picture>
<picture><img alt="Shelfie screenshot 1" src="images/large-parks_3.png?raw=true"></picture>
| <picture><img alt="Shelfie screenshot 1" src="images/large-parks_4.png?raw=true"></picture>  | <picture><img alt="Shelfie screenshot 1" src="images/large-parks_5.png?raw=true"></picture>  | <picture><img alt="Shelfie screenshot 1" src="images/large-parks_6.png?raw=true"></picture>  |
|---|---|---|







