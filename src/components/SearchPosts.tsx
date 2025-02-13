import type { InferEntrySchema, RenderedContent } from "astro:content";
import Fuse from "fuse.js";
import { useState, type ChangeEvent } from "react";
import { Input } from "@/components/ui/input"; // Ensure correct ShadCN import
import { displayDate } from "@/utils/date";

const options = {
  keys: ["data.title", "data.description", "data.slug"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.4, // Slightly lowered for better results
};

interface SearchPostsProps {
  searchList: {
    id: string;
    body?: string;
    collection: "posts";
    data: InferEntrySchema<"posts">;
    rendered?: RenderedContent;
    filePath?: string;
  }[];
}

export function SearchPosts({ searchList }: SearchPostsProps) {
  const [query, setQuery] = useState<string>("");

  const fuse = new Fuse(searchList, options);

  const posts =
    query.trim().length > 1
      ? fuse
          .search(query)
          .map((result) => result.item)
          .slice(0, 5)
      : searchList;

  function handleOnSearch(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value.trimStart()); // Avoids leading spaces affecting results
  }

  return (
    <div className="flex-grow min-h-0 h-full px-6 xl:px-8 overflow-hidden flex flex-col">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        id="search"
        type="text"
        value={query}
        onChange={handleOnSearch}
        placeholder="Search posts"
        className="sticky my-6 xl:my-8"
      />
      <div className="overflow-y-auto pb-6 xl:pb-8 h-full rounded-lg grow min-h-0">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-2 xl:gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-zinc-200 dark:bg-zinc-900 rounded-lg overflow-hidden group w-full shadow-md"
            >
              <a href={`/posts/${post.id}`} className="block h-full">
                <div className="w-full overflow-hidden border border-border rounded-lg">
                  <img
                    src={post.data.image.src}
                    alt={post.data.imageAlt || "Post image"}
                    className="w-full h-full aspect-video object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col p-4">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-zinc-900 dark:bg-zinc-200 group-hover:bg-gradient-to-r group-hover:from-primary-300 group-hover:to-secondary-300 transition-colors">
                    {post.data.title}
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-400 text-sm mt-2">
                    {post.data.description}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-500 text-xs mt-2 block">
                    {displayDate(post.data.pubDate)}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
