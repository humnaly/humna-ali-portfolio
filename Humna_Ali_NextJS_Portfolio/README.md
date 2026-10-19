# Humna Ali — Custom Next.js Portfolio

## About This Website

This Project Converts The Supplied WordPress Theme Into A Custom Next.js App Router Website. It Retains The Original Green AI-Style Design, Content, Two Images, Profile Links, Layout, And Interactive Effects. The Main Portfolio HTML Is Rendered By A React Server Component. The Navigation Menu And Animated Effects Use Small Client Components. WordPress, Elementor, And WordPress Plugins Are Not Required.

## Quick Visual Preview

Open `preview.html` Directly In Your Browser To See An Offline Reference Of The Design Without Installing Software. This Is A Visual Preview Only. The Real Next.js Site Is The `app/` Project And Must Be Started Or Deployed Using The Steps Below.

## Run On Your Computer

1. Install Node.js 20.9 Or Higher (A Supported LTS Release Is Recommended).
2. Extract This ZIP File.
3. Open A Terminal In The `Humna_Ali_NextJS_Portfolio` Folder.
4. Run The Following Commands:

```bash
npm install
npm run dev
```

5. Open `http://localhost:3000` In Your Browser.

## Production Verification

```bash
npm run check:content
npm run typecheck
npm run build
npm start
```

## Add Your Domain Before Launch

Copy `.env.example` To `.env.local` And Replace The Example URL With Your Real Website URL:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

This Sets The Canonical URL, Sitemap Entry, And Social Preview Image URL. Run `npm run build` After Adding The Production URL. Never Publish The Example Domain.

## Deployment

Deploy To Vercel Or Another Host Supporting Next.js And Node.js. Upload The Project To A Git Repository, Import It In Your Hosting Dashboard, Set `NEXT_PUBLIC_SITE_URL`, And Deploy. A WordPress-Only Or Traditional PHP-Only Hosting Plan Is Not Sufficient For The Standard Next.js Server Mode.

## Where To Edit

- `app/page.tsx`: Home Page Sections, Projects, Services, Skills, Experience, And Education.
- `app/components/Header.tsx`: Menu, Navigation, And Contact Button.
- `app/components/Footer.tsx`: Footer And Social Profile Links.
- `app/components/PortfolioEffects.tsx`: Scroll Reveal And Pointer Tilt Animation.
- `app/globals.css`: Original Portfolio Design, Colors, Grids, And Responsive Styles.
- `public/images/`: Original Artwork Files.
- `app/layout.tsx`: SEO Titles, Descriptions, And Social Preview Metadata.

## Important Notes

- Career Details, Project Claims, Qualifications, And External Profile URLs Were Retained From The Supplied Website. These Details Were Not Independently Verified.
- All Website Copy Was Updated So Each Space-Separated Word Starts With A Capital Letter, As Requested. The Existing Meaning And Details Remain The Same.
- No Email Address, Contact Form Backend, Client Testimonials, Or Measured SEO Results Were Invented.
- Project Cards From The Source Are Text-Based; No Missing Client Work Images Or External Case Study Links Were Invented.
- The Original WordPress CSS Class Names Are Kept As Pure CSS Selectors For Pixel-Level Design Compatibility. No WordPress Runtime Is Needed.
- Test Your Domain, Profile Links, Mobile Layout, Image Loading, And Publishing Setup In Your Hosting Environment Before Launch.

## Verification Status

The Source Sections, Profile URLs, Project And Career Copy, Image Bytes, And TypeScript Syntax Were Checked During Conversion. A Full Next.js Dependency Installation And Production Build Could Not Be Completed In The Packaging Environment Because Access To The NPM Registry Was Unavailable. Run `npm install`, `npm run typecheck`, And `npm run build` On An Internet-Connected Computer Or Deployment Platform Before Publishing.
