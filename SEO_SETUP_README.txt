SEO SETUP DONE - AYUSH PORTFOLIO (Next.js)
============================================

Kya update hua:

1. app/layout.tsx
   - Full SEO metadata add kiya (title, description, keywords, Open Graph, Twitter card)
   - metadataBase set kiya: https://ayush-portfolio-com.vercel.app

2. public/robots.txt
   - Naya bana diya, sitemap ka link included hai

3. public/sitemap.xml
   - Naya bana diya, homepage listed hai

AGE KE STEPS:

1. Google Search Console pe jao: search.google.com/search-console
2. "Add Property" → URL prefix → apna Vercel URL daalo
3. Verification method: "HTML tag" choose karo
4. Wahan se milega ek code jaise: content="abc123xyz..."
5. app/layout.tsx me "verification" field ke andar likho:
     verification: {
       google: "abc123xyz...",
     },
6. Commit + push karo, Vercel auto-deploy kar dega
7. Search Console me wapas jao, "Verify" dabao
8. Verify hone ke baad, "URL Inspection" tool me apna homepage URL daalo
9. "Request Indexing" button dabao

RESULT: 2-14 din me Google search me site dikhna shuru ho jayegi.

NOTE: Agar future me multiple pages banate ho (About, Projects, Contact),
to public/sitemap.xml me har page ke liye ek <url> block add karna.
