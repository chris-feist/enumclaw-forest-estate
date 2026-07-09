# Enumclaw Forest Estate

Marketing website for 23670 SE 448th St, Enumclaw, WA.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Deployment

Import the repository into Vercel and point `enumclawforestestate.com` to the generated Vercel project.

## v0.4.0 updates

- Replaced remote listing photography with 68 local web-ready photos in `public/assets/photos/`
- Corrected school names, grade ranges and distances
- Replaced “generator wiring” with the installed whole-home generator and automatic transfer switch
- Added the commercial dog wash, hidden pantry, floor-to-ceiling cabinetry, whole-home audio, enhanced insulation, large bonus room, stamped concrete and included custom dining table
- Added a larger curated gallery
- Localized the KW Mountains to Sound Realty logo and floorplans

## Important marketing disclaimer

The future shop image is conceptual only. PBRS usage, costs, building feasibility, permits, utilities and tax implications should be independently verified by buyers with King County and qualified professionals.


## v0.4.0 updates

- Added fenced, turf dog run to notable features.
- Corrected trail messaging to describe one existing trail spanning the property, with room to add more.
- Added five-minute downtown Enumclaw messaging, including shopping, dining, bars, breweries, and nightlife.

## v0.5.0 updates

- Reworked the gallery to use explicit `standard` and `wide` image layouts instead of index-based sizing.
- Reordered the gallery so standard images finish in balanced desktop pairs.
- Removed the property-boundary image from the general gallery; it remains in the land section where it has context.
- Reformatted the gallery component and media definitions into readable multiline JSX and objects for clearer Git diffs.

## v0.5.1 updates

- Added a Next.js-generated sitemap at `/sitemap.xml`.
- Added a Next.js-generated robots file at `/robots.txt`.
- Configured both files to use `https://enumclawforestestate.com` as the canonical site URL.


## v0.5.2

- Added `public/assets/social/enumclaw-forest-estate-preview.jpg` using `public/assets/photos/photo-54.jpg`.
- Added `app/opengraph-image.jpg` and `app/twitter-image.jpg`.
- Updated `app/layout.tsx` with Open Graph and Twitter metadata for Apple Messages, Facebook, LinkedIn, Slack, and other social previews.
- Confirmed canonical metadata points to `https://enumclawforestestate.com`.


## v0.5.3

- Replaced the social preview image with a branded 1200×630 image based on the real video screenshot.
- Updated `public/assets/social/enumclaw-forest-estate-preview.jpg`.
- Updated `app/opengraph-image.jpg` and `app/twitter-image.jpg`.
- Added the original screenshot as `public/assets/social/social-preview-source.png` for future editing.
- Refined social metadata descriptions for the website preview card.


## v0.5.4

- Updated the social preview image using the approved final marketing graphic.
- Replaced `public/assets/social/enumclaw-forest-estate-preview.jpg`.
- Replaced `app/opengraph-image.jpg`.
- Replaced `app/twitter-image.jpg`.
- Saved the uploaded source graphic at `public/assets/social/enumclaw-forest-estate-preview-source.png`.
- Updated the package version to `0.5.4`.


## v0.5.5

- Added Vercel Analytics via `@vercel/analytics`.
- Added Vercel Speed Insights via `@vercel/speed-insights`.
- Updated `app/layout.tsx` to render `<Analytics />` and `<SpeedInsights />`.
- Added campaign-ready UTM examples for paid and organic traffic.

### Enable in Vercel

After deployment, open the Vercel project and enable:

1. **Analytics**
2. **Speed Insights**

### Suggested campaign URLs

Use tagged URLs when sharing or advertising so traffic sources are easier to review:

```text
https://www.enumclawforestestate.com/?utm_source=facebook&utm_medium=paid_social&utm_campaign=forest_estate_launch
https://www.enumclawforestestate.com/?utm_source=instagram&utm_medium=paid_social&utm_campaign=forest_estate_launch
https://www.enumclawforestestate.com/?utm_source=facebook&utm_medium=organic_social&utm_campaign=todd_post
https://www.enumclawforestestate.com/?utm_source=youtube&utm_medium=organic_video&utm_campaign=property_tour
```


## v0.5.6

- Added an open house banner on the hero section.
- Added configurable `openHouses` values in `lib/property.ts`.
- Added a sticky `Schedule a Private Tour` CTA.
- Updated the contact section CTA to prioritize scheduling a private tour by email.
- Added a secondary call button for Todd.
- Added NWMLS #2543724 to the contact card and footer disclosure.
- Updated package version to `0.5.6`.


## v0.5.7

- Added Instagram and Facebook links to centralized property data.
- Added reusable `SocialLinks` component.
- Added `FollowProperty` section near the bottom of the page.
- Added social links to the header, contact area, and footer when supported by the current layout.
- Preserved open house, CTA, Vercel Analytics, Speed Insights, and NWMLS #2543724 updates.


## v0.5.8

- Fixed desktop social button alignment in the contact/private showings area.
- Ensured `FollowProperty` is imported in `app/page.tsx` when rendered.
- Added `isOpenHouseUpcoming` and `getUpcomingOpenHouses` helpers to `lib/property.ts`.
- Updated open house rendering to automatically hide dates before today.
- Preserved social links, CTA, MLS #2543724, Analytics, and Speed Insights.

## v0.5.9

  * Added real Instagram and Facebook SVG icons for social links.
  * Added centralized section hash links for ad sitelinks in `lib/property.ts`.
  * Added `#floorplans` and `#features` anchors for Google Ads sitelinks.
  * Updated open house dates to use ISO values for automatic expiration while preserving display labels.
  * Cleaned up duplicate footer MLS disclosure.
