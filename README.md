# Tripser Blog site

Website built with React and Nextjs.

Sass for styling.

React icons for icons.

MDX turn .mdx files into html.

Gray-matter gets the meta data out of .mdx files

## INSTALL

```
npm install
yarn install
npm run dev
yarn dev
```

needs node v18.17.0

## DEPLOY

Also make sure your linter is error-free with `npm run lint` or `yarn lint`

Deployment should be managed with `npm run deploy` or `yarn deploy`

Site is deployed on Firebase Hosting: https://console.firebase.google.com/u/0/project/tripser-496d9/overview

Commit and Push your changes to master once site is deployed.

## TODO

- check /en /fr works
- url metadata should be good
- lang tag should be good

- Issue with SEO in french => non-blog pages are indexed in EN only as there is a single url => /fr/ 
  - https://nextjs.org/docs/pages/building-your-application/routing/internationalization#locale-strategies

- Articles
  - gorges du verdon 
  - reunion
    - top 10 des randonnées à l'île de la Réunion
    - top 10 des plages à l'île de la Réunion
    - top 10 des cascades à l'île de la Réunion    
    - top 10 des choses à faire à l'île de la Réunion
  - via ferrata saint julien en vercors
  - best christmas markets
  - split drome and vercors
  - baie de somme
  - bordeaux
  - jura
  - costa rica
  - croatie monténégro
  - ...

- links between articles
- add affiliate links of hotels, cars, activities, ...
- add alternative stays?

- https://codestitch.app/page-speed-handbook
- https://pagespeed.web.dev/
- seo check
- lang: check seo is good

- build mdx editor
  - handle some frontmatter outside the editor: categories, lang, en-fr, ...?
  - handle translation?
  - FIX? => API resolved without sending a response for /api/createMdxFile, this may result in stalled requests.

- add framed text, quotes, highlighted words, 
- rearange homepage: big pinned article (carousel??)
- rework logo to svg + add on homepage?
- section bon plans
- add a map of destinations

## BLOG ARTICLES

- Create a new .mdx file under `/pages/blog`
- Give it a powerful name
- Add the meta data at the very top
  ```
  ---
  title: 'Post title'
  intro: 'Post longer title or intro'
  published: '2022-12-30'
  modified: '2022-12-31'
  lang: 'fr'
  en: 'weekend-in-luxembourg'
  categories: 'next.js, css, tutorial, analytics'
  ---
  ```
- Write the article with keywords, speaking with we, giving lots of details on itinerary, location, hotels, restaurants, activities
- Affiliation??
- Review spell on https://languagetool.org/
- Find splash image, 1920x compress on https://compressjpeg.com/ and upload in /public/images/articles/(articleName).jpg
- Find content images, 800x450, compress on https://compressjpeg.com/ and upload in /public/images/content/(articleName)/(name).jpg
- Create itinerary image from https://pebblar.com/, 800x450, compress on https://compressjpeg.com/ and upload in /public/images/maps/(name).jpg

## SOCIALS

- https://pinterest.com/tripserblog/
- https://instagram.com/tripserblog/

## ANALYTICS

Easy web analytics without tracking of personal data at https://tripser.goatcounter.com/
