import "server-only";
import React from "react";
import { RenderCardsBlogs } from "./RenderCardBlogs";

const fetchBlog = () => {
  const article = {
    id: "1",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo, delectus nesciunt.",
    href: ".",
    imageUri: "/images/placeholder.jpg",
  };

  const blog = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
    () => article
  );

  return blog;
};

const BlogContainer = () => {
  const articles = fetchBlog();
  return (
    <>
      <RenderCardsBlogs blogArticles={articles} />
    </>
  );
};

export default BlogContainer;
