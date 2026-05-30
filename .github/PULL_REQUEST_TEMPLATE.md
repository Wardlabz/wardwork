# 📝 Pull Request

## 🔧 Title:
fix: Add rel=canonical to root layout metadata to prevent duplicate content indexing

## 🛠️ Issue
- Closes #(canonical-seo-issue)

## 📚 Description
The platform is accessible at https://wardwork.tech but may also be
reachable via www.wardwork.tech, Vercel preview URLs, or other aliases.
Without a canonical URL declaration, search engines can index multiple
versions of the same page, splitting link equity and causing duplicate
content penalties.

Next.js Metadata API supports metadataBase and alternates.canonical for
exactly this purpose and they must be declared at the root layout level
so every page in the app inherits them automatically.

## ✅ Changes applied
- Added metadataBase: new URL('https://wardwork.tech') to the root
  metadata export in src/app/layout.tsx so Next.js resolves all relative
  icon/image URLs to absolute URLs and eliminates the
  'metadataBase property in metadata export is not set' build warning
- Added alternates: { canonical: '/' } to the root metadata export;
  Next.js resolves this against metadataBase and emits
  <link rel=\"canonical\" href=\"https://wardwork.tech/\" /> on every page
  that inherits this layout, consolidating link equity across all aliases
- Added inline comments explaining the purpose of both new fields
- No changes to image URLs (openGraph.images and twitter.images were
  already relative paths before this PR)

## 🔍 Evidence/Media (screenshots/videos)
- No visual change — metadata only; verify via 'view-source' or browser
  DevTools Elements panel: <link rel=\"canonical\" href=\"https://wardwork.tech/\">
  should appear in <head> on every page
- Next.js build output should no longer emit the metadataBase warning"
