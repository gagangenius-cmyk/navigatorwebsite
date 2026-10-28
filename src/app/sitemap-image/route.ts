import { getAllBlogPosts } from '@/lib/blogData';
import { brandLogo, siteUrl } from '@/lib/marketingSeo';

export const dynamic = 'force-dynamic';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const blogImages = getAllBlogPosts()
    .filter((post) => post.image)
    .map((post) => `
  <url>
    <loc>${siteUrl}/immigration/blog/${escapeXml(post.slug)}</loc>
    <image:image>
      <image:loc>${siteUrl}${escapeXml(post.image!)}</image:loc>
      <image:caption>${escapeXml(post.imageCaption ?? post.imageAlt ?? post.title)}</image:caption>
      <image:title>${escapeXml(post.title)}</image:title>
    </image:image>
  </url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <image:image>
      <image:loc>${siteUrl}${brandLogo}</image:loc>
      <image:caption>Navigator Immigration Consultant Logo</image:caption>
      <image:title>Navigator Immigration Consultant</image:title>
    </image:image>
  </url>
  ${blogImages}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
