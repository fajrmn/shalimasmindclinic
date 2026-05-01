# Shalima's Mind Clinic - Cloudflare Pages Landing Site

SEO-optimized, mobile-first landing page for `shalimasmindclinic.com` with WhatsApp-first lead capture and Cloudflare Pages support.

## Project Structure

- `index.html`: Full landing page with semantic sections, FAQ, and JSON-LD schema.
- `styles.css`: Lightweight responsive styles.
- `script.js`: Form UX and WhatsApp flow.
- `functions/api/contact.js`: Cloudflare Pages Function for lead handling.
- `assets/`: Hero visual and favicon.

## Required Replacements Before Go-Live

1. WhatsApp number is preconfigured as `919400778065` in `index.html`, `script.js`, and `functions/api/contact.js`.

2. Update exact NAP (Name, Address, Phone) to match Justdial and LinkedIn listings in:
- `index.html` (contact section + JSON-LD)

3. Add real social profile links in:
- `index.html` (`sameAs`, social section)

4. Replace testimonial placeholders with verified reviews.

## Optional Environment Variables (Cloudflare Pages)

- `WHATSAPP_NUMBER`: Overrides fallback WhatsApp number.
- `LEAD_WEBHOOK_URL`: If set, the form endpoint will POST lead JSON to this URL (for email/CRM automation).

## Deploy to Cloudflare Pages

1. Push this directory to GitHub.
2. In Cloudflare Pages, create a project and connect the repo.
3. Build settings:
- Framework preset: `None`
- Build command: *(leave empty)*
- Build output directory: `/`
4. Add environment variables under Pages settings (if needed):
- `WHATSAPP_NUMBER`
- `LEAD_WEBHOOK_URL`
5. Set custom domain:
- `shalimasmindclinic.com`
- `www.shalimasmindclinic.com`

## Performance Notes

- Minimal JS and CSS.
- No heavy external libraries.
- Hero image served as lightweight SVG placeholder (swap to optimized WebP clinic photos later for stronger trust).

