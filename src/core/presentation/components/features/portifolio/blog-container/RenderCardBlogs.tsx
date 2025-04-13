"use client";
import React, { useEffect } from "react";
import { BlogCard } from "../cards/BlogCard";
import { useFilterCategoriesStore } from "@/core/presentation/stores/FilterBlogStore";

type BlogCardProps = {
  title: string;
  description: string;
  imageUri: string;
  href: string;
};

export const RenderCardsBlogs = ({
  blogArticles,
}: {
  blogArticles: BlogCardProps[];
}) => {
  const { restore } = useFilterCategoriesStore();

  useEffect(() => {
    restore();
  }, []);

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 grid   grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-scroll ">
      {blogArticles.map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </div>
  );
};
