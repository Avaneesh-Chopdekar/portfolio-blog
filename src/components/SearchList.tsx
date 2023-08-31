import { useState } from "react";
import formatDate from "../utils/formatDate";

export default function SearchList({ list }) {
  const [query, setQuery] = useState("");

  return (
    <main className="w-11/12 sm:w-4/5 mb-4 mx-auto">
      <input
        className="text-lg px-4 py-2 rounded w-full outline-none border-none bg-gray-200 dark:bg-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        list="search-items"
      />
      <picture
        className={`my-4 select-none ${query !== "" ? "hidden" : "block"}`}
      >
        <source
          media="(max-width: 600px)"
          className="rounded-md w-full"
          srcSet="https://source.unsplash.com/600x300?mountains"
        />
        <img
          className="rounded-md w-full"
          src="https://source.unsplash.com/1200x300?mountains"
          alt=""
          loading="lazy"
        />
      </picture>

      <section>
        <ul className="flex flex-col-reverse">
          {list
            .filter((blog: { data: { title: string } }) => {
              if (query === "") {
                return blog;
              } else if (
                blog.data.title.toLowerCase().includes(query.toLowerCase())
              ) {
                return blog;
              }
            })
            .map(
              (blog: {
                slug: string;
                data: { title: string; description: string; pubDate: any };
              }) => (
                <li key={blog.slug} className="py-2 mt-4">
                  <a href={`/blog/${blog.slug}`}>
                    <p className="group balance-text dark:text-white inline-block text-2xl md:text-3xl hover:text-blue-500 focus:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400  transition-colors ease-out">
                      {blog.data.title}{" "}
                      <span
                        className={`inter inline-block transition-transform group-hover:translate-x-1`}
                      >
                        -&gt;
                      </span>
                    </p>
                  </a>
                  <p className="mt-1 text-gray-500 dark:text-gray-400 inter">
                    {formatDate(blog.data.pubDate)}
                  </p>
                  <p className="my-2 text-gray-500 dark:text-gray-400 inter">
                    {blog.data.description.length > 120
                      ? `${blog.data.description.slice(0, 120)}...`
                      : blog.data.description}
                  </p>
                  <hr />
                </li>
              )
            )}
        </ul>
      </section>
    </main>
  );
}
