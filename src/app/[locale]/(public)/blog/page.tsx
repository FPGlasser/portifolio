import React from "react";
import { Section, Typography } from "@/components/layout";

import BlogContainer from "@/components/blog-container/BlogContainer";
import { SidePanel } from "@/components/cards/SidePanel";

const BlogPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="flex flex-col  items-center gap-8">
        <div className="text-center py-4">
          <Typography>Blog</Typography>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1280px]">
          <BlogContainer />

          <SidePanel>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            earum quibusdam eveniet maiores commodi provident saepe fuga
            voluptas dolores vel delectus voluptatibus ab, rerum veritatis. Quae
            provident tempore dignissimos nesciunt.
          </SidePanel>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
