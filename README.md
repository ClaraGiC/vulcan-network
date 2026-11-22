# VULCAN website

Website of VULCAN, the Vulture Cognition Analysis Network. Hosted by ECoBird, Ghent University.

The site is plain HTML and CSS. It needs no build step, so GitHub Pages can serve it as it is.

## Pages

| File | Tab |
|---|---|
| `index.html` | Home |
| `about.html` | About |
| `research.html` | Research |
| `species.html` | Species & data |
| `people.html` | People |
| `news.html` | News |
| `join.html` | Join us |

Text in square brackets, such as `[contact email]` or `[n]`, is a placeholder. Search for `placeholder` or `[` to find them all.

## Publish on GitHub Pages

1. Create a new public repository on GitHub, for example `vulcan-network`.
2. Upload all files in this folder, including the hidden `.nojekyll` file and the `assets` folder.
3. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. After a minute or two, the site is live at `https://<your-user-name>.github.io/vulcan-network/`.

## Edit

- Text: edit the `.html` files directly, in GitHub or any text editor.
- Colours and layout: `assets/style.css`. The palette is defined once at the top.
- Logos and the network image: `assets/img/`.
- Font: Archivo, served from `assets/fonts/` (SIL Open Font License, see `OFL.txt`).

## Species photos

The four species photos come from Pixabay (Pixabay Content License, free to use). Until you add them to the site, the pages load them straight from Pixabay. To make the site independent of Pixabay, download each photo and save it in `assets/img/species/` under the name below. The site uses the local file as soon as it exists.

| File name | Species | Pixabay page |
|---|---|---|
| `griffon.jpg` | Griffon vulture | https://pixabay.com/photos/griffon-vulture-old-world-vulture-7407781/ |
| `cinereous.jpg` | Cinereous vulture | https://pixabay.com/photos/cinereous-vulture-raptor-vulture-7811766/ |
| `egyptian.jpg` | Egyptian vulture | https://pixabay.com/photos/egyptian-vulture-raptor-bird-3969674/ |
| `bearded.jpg` | Bearded vulture | https://pixabay.com/photos/bird-bearded-vulture-ornithology-7365012/ |

The 1280 px size is enough.

## Newsletter form

The sign-up form is a design only. It does not send anything yet. To make it work, connect it to a newsletter service (for example Mailchimp, Brevo or Buttondown) and paste that service's form address into the `action` of each `<form>`.

## Palette

| Colour | Hex | Use |
|---|---|---|
| Vulture red | `#66231F` | Bird silhouettes |
| Burgundy | `#6F1D1B` | Wordmark, headings, buttons |
| Rust | `#99582A` | Chosen paths, large gear, "Cognition" |
| Tawny | `#C49A6C` | Alternative paths, small gear |
| Sand | `#E8DAC5` | Panels, borders |
| Cream | `#F5EEE3` | Backgrounds |
| Dark brown | `#2B1D16` | Text, dark backgrounds |
