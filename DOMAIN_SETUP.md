# Custom Domain Configuration Guide

This guide details how to link your custom domain (e.g., `quiz.yourdomain.com` or `yourdomain.com`) to this application.

---

## 1. Hosting on Vercel (Recommended)

1. Push this directory to your GitHub repository.
2. In the Vercel Dashboard, select **Add New Project** and import the repository.
3. Open **Project Settings > Domains**.
4. Enter your custom domain (e.g., `assessment.yourdomain.com`).
5. Configure your DNS provider with the records provided by Vercel:
   * **Apex Domain (`yourdomain.com`)**:
     * Type: `A`
     * Name: `@`
     * Value: `76.76.21.21`
   * **Subdomain (`quiz.yourdomain.com`)**:
     * Type: `CNAME`
     * Name: `quiz`
     * Value: `cname.vercel-dns.com`

---

## 2. Hosting on Cloudflare Pages

1. In the Cloudflare Dashboard, go to **Workers & Pages > Create application > Pages**.
2. Connect your Git repository.
3. Set **Build command**: None (Static HTML/CSS/JS).
4. Set **Build output directory**: `/` (root directory).
5. Open **Custom Domains > Set up a domain**.
6. Cloudflare will automatically route the DNS and issue an SSL certificate.

---

## 3. Hosting on a VPS / Nginx Server

If hosting directly on an Ubuntu/Debian server using the built-in Node server or Nginx:

### Nginx Reverse Proxy Configuration:

```nginx
server {
    listen 80;
    server_name quiz.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Enable SSL with Certbot:

```bash
sudo certbot --nginx -d quiz.yourdomain.com
```

---

## 4. Verification Checklist

- [x] Favicon is present (`favicon.svg`).
- [x] Privacy Policy is deployed (`/privacy.html`).
- [x] Terms and Conditions are deployed (`/terms.html`).
- [x] HTTPS / TLS encryption active.
- [x] Zero hardcoded keys or external tracking scripts.
