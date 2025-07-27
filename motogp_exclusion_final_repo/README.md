# The Evolution of Exclusion

**How MotoGP Outpaced Human Biology** — A multimedia technical essay exploring the physiological and neurological limits of modern motorcycle racing.

## 🌐 Live Demo
Deploy via:
- [Netlify Drop](https://app.netlify.com/drop)
- `vercel` CLI: `vercel --prod`
- `netlify` CLI: `netlify deploy --prod`

## 🚀 Project Structure

```
motogp-exclusion/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── chart.min.js
│   │   └── main.js
│   └── img/
│       └── stub.png
├── README.md
├── netlify.toml (optional)
└── .vercel/ (optional)
```

## 📊 Visualizations
- Power-to-weight ratio over time (Chart.js)
- Reaction Time Grid (MotoGP vs WSBK) — planned
- Neural Processing Heatmap — planned

## 📦 Deployment

### Vercel
```bash
vercel login
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 🌐 DNS (Custom Domain)

Map your DNS to Netlify or Vercel:
- **Netlify**: Add domain in dashboard > verify ownership > update DNS A/ALIAS/CNAME
- **Vercel**: vercel domains add yourdomain.com

