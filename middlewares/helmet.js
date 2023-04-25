const helmet = require('helmet');

const configureHelmet = (app) => {
  app.use(
    helmet({
      // Disable the Content Security Policy (CSP) to allow loading external scripts and stylesheets
      contentSecurityPolicy: false,
      // Allow DNS prefetching
      dnsPrefetchControl: { allow: true },
      // Set the frameguard to deny all framing
      frameguard: { action: 'deny' },
      /* Enable HSTS (HTTP Strict Transport Security) with a one-year maxAge,
       subdomain inclusion, and preload */
      hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
      /* Set the X-Download-Options header to prevent Internet Explorer from executing downloads
      in the site's context */
      ieNoOpen: true,
      /* Enable the X-Content-Type-Options header to prevent MIME type sniffing */
      noSniff: true,
      /* Set the referrer policy to same-origin */
      referrerPolicy: { policy: 'same-origin' },
      /* Enable the X-XSS-Protection header to enable the browser's built-in XSS protection */
      xssFilter: true,
    }),
  );
};

module.exports = configureHelmet;
