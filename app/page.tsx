import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <div className="site-title">blog</div>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug} className="post-list-item">
            <Link href={`/${post.slug}`}>
              <span className="post-list-title">{post.title}</span>
              <span className="post-list-date">{formatDate(post.date)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
