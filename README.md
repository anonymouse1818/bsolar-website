# Butan Solar Landing Page (Draft v1)

## Run locally

1. Open `/Users/bobng/Desktop/codex/butan-landing/index.html` directly in browser, or
2. Serve with any static server from `/Users/bobng/Desktop/codex/butan-landing`.

## Files

- `/Users/bobng/Desktop/codex/butan-landing/index.html`
- `/Users/bobng/Desktop/codex/butan-landing/styles.css`
- `/Users/bobng/Desktop/codex/butan-landing/script.js`

## Important configuration

Inside `/Users/bobng/Desktop/codex/butan-landing/script.js`:

- `LEAD_CONFIG.whatsappNumber`
- `LEAD_CONFIG.teamEmail`
- `LEAD_CONFIG.emailEndpoint`

Default email endpoint uses FormSubmit AJAX:
- `https://formsubmit.co/ajax/butansolar@gmail.com`

You can replace this endpoint with your backend/API when ready.

## Replace project data

Update the `PROJECTS` array in `/Users/bobng/Desktop/codex/butan-landing/script.js`:

- project photos (`image`)
- before/after bill values
- project cost
- payback/ROI

Current metrics are modeled placeholder values for layout and conversion storytelling.

## Replace clients and testimonials data

Update these arrays in `/Users/bobng/Desktop/codex/butan-landing/script.js`:

- `CLIENTS`: shown in the animated past-clients marquee section.
- `TESTIMONIALS`: shown in the satisfied-clients testimonial cards section.

Current testimonial quotes are placeholder copy and should be replaced with approved client statements.

For client logos:
- Each `CLIENTS` item supports a `logo` field.
- If `logo` is empty, the client name text is shown.
- If `logo` has a URL/path, the logo image is shown in the marquee chip.

## Lead flow

On form submit:
1. Builds a WhatsApp message template automatically from `companyName` + `billRange`.
2. Opens WhatsApp draft in a new tab.
3. Sends an email notification payload to the configured email endpoint.
