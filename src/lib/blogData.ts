export type BlogSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorBio: string;
  date: string;
  dateModified?: string;
  category: string;
  readTime: string;
  answer: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string;
    secondaryKeywords: string[];
  };
  seoMeta: {
    intent: 'informational' | 'transactional' | 'navigational';
    funnelStage: 'TOFU' | 'MOFU' | 'BOFU';
    geoTarget: string[];
    pillarTopic: string;
    contentCluster: string;
  };
  content: {
    sections: BlogSection[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  tags: string[];
  relatedContent: {
    primary: string[];
    secondary: string[];
  };
  linkPriority: {
    primaryWeight: number;
    secondaryWeight: number;
  };
  internalLinks: {
    url: string;
    anchor: string;
  }[];
  authorityLinks?: {
    label: string;
    url: string;
  }[];
  conversion: {
    ctaPrimary: string;
    ctaSecondary: string;
    formEnabled: boolean;
  };
  schema: {
    type: 'Article';
    faqEnabled: boolean;
  };
  seoControl: {
    index: boolean;
    follow: boolean;
    canonical: string;
  };
  quality: {
    tone: string;
    readability: string;
  };
};

export type BlogCardPost = Pick<
  BlogPost,
  'id' | 'slug' | 'title' | 'excerpt' | 'author' | 'date' | 'category' | 'readTime' | 'image' | 'imageAlt'
>;

export function toBlogCardPosts(posts: BlogPost[]): BlogCardPost[] {
  return posts.map(({ id, slug, title, excerpt, author, date, category, readTime, image, imageAlt }) => ({
    id,
    slug,
    title,
    excerpt,
    author,
    date,
    category,
    readTime,
    image,
    imageAlt,
  }));
}

function isServer(): boolean {
  return typeof globalThis.window === 'undefined';
}

const blogDataPath = () => {
  const { join } = require('path') as typeof import('path');
  return join(process.cwd(), 'data', 'blogs.json');
};

let _cachedFileSignature: string | null = null;

function loadFromJson(): BlogPost[] {
  if (!isServer()) return [];
  try {
    const { readFileSync, statSync } = require('fs') as typeof import('fs');
    const filePath = blogDataPath();
    const { mtimeMs, size } = statSync(filePath);
    const signature = `${mtimeMs}:${size}`;

    if (_cachedPosts && _cachedFileSignature === signature) {
      return _cachedPosts;
    }

    const raw = readFileSync(filePath, 'utf-8');
    const posts = JSON.parse(raw) as BlogPost[];
    _cachedPosts = posts;
    _cachedFileSignature = signature;
    return posts;
  } catch (e) {
    return [];
  }
}

function saveToJson(posts: BlogPost[]): void {
  if (!isServer()) return;
  const { writeFileSync } = require('fs') as typeof import('fs');
  writeFileSync(blogDataPath(), JSON.stringify(posts, null, 2), 'utf-8');
}

let _cachedPosts: BlogPost[] | null = null;

function readAllPosts(): BlogPost[] {
  if (_cachedPosts) return _cachedPosts;
  _cachedPosts = loadFromJson();
  return _cachedPosts;
}

export const blogPosts: BlogPost[] = loadFromJson();

export function getBlogPost(id: string): BlogPost | undefined {
  const fresh = loadFromJson();
  if (fresh.length > 0) {
    _cachedPosts = fresh;
    return fresh.find((post) => post.id === id);
  }
  return blogPosts.find((post) => post.id === id);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const fresh = loadFromJson();
  if (fresh.length > 0) {
    _cachedPosts = fresh;
    return fresh.find((post) => post.slug === slug);
  }
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  const fresh = loadFromJson();
  if (fresh.length > 0) {
    _cachedPosts = fresh;
    return fresh;
  }
  return blogPosts;
}

export function saveBlogPosts(posts: BlogPost[]): void {
  saveToJson(posts);
  _cachedPosts = posts;
  _cachedFileSignature = null;
}
