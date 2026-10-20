# Blue Diamond Films Ltd. website

Responsive multi-page website built with Vite, Tailwind CSS v4, and vanilla JavaScript. It uses the supplied Blue Diamond Films assets and local Liberation Serif/Sans fonts.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `what-we-do.html` — What We Do
- `divisions.html` — Our Divisions
- `team.html` — Our Team
- `contact.html` — Contact

## Requirements
- Node.js 20.19+ or 22.12+

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```
The production-ready static output is created in `dist/`.

## Hero video
Open `src/app.js` and replace the empty `HERO_VIDEO_URL` value with the URL to your hosted MP4 video. The supplied cinematic image remains as the poster/fallback. Keep the video muted and compressed for performance.

## Team details
The four supplied portrait assets are included. Team names and roles are placeholders in `src/app.js`; replace the `team` array with approved details before launch.

## Contact form
The form performs client-side validation and prepares an email addressed to `info@bluediamondfilms.com` using `mailto:`. It does not store or transmit form submissions to a server. For production, connect it to a secure backend or form provider, add server-side validation and spam protection, and update the submit handler.

## Deployment
Deploy the project to a static host that supports Vite builds (for example, Netlify, Vercel, or a standard web server). If hosting under a subpath, review `base` in `vite.config.js` and asset URLs in `src/app.js`/`src/style.css`.


## Brand and contact form updates

- Header and footer use the supplied transparent white-wordmark logo at `public/assets/logo-primary.png` and `public/assets/logo-wordmark.png`.
- The company location is Lagos, Nigeria only. The contact page shows Lagos local time only.
- The contact form submits using FormSubmit AJAX to `info@bluediamondfilms.com`. For first-time setup, submit a test enquiry and open the verification email delivered to the company inbox to activate delivery. Check the inbox's spam folder if needed.
- Form delivery depends on the third-party service and the recipient inbox being activated. If you need full control, spam protection, data retention policies, or guaranteed delivery, use a backend endpoint instead.
- Main source files: `src/app.js` (page content, navigation, clocks, form submission) and `src/style.css` (responsive styles and visual system).
