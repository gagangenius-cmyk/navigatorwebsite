import { getAllBlogPosts, toBlogCardPosts } from '@/lib/blogData';
import BlogClient from './_components/BlogClient';

export const dynamic = "force-dynamic"


export default function BlogPage() {
  const posts = toBlogCardPosts(getAllBlogPosts());
  return <BlogClient posts={posts} />;
}
