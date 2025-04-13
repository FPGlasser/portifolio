import React from "react";
import { Typography } from "@/core/presentation/components/portifolio/layout";
import { Button } from "@/core/presentation/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/core/presentation/components/ui/tabs";

const AllPostsPage = () => {
  return (
    <div>
      {/* <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Typography>Posts</Typography>
          <Button>New Post</Button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Tabs defaultValue="posts" className="w-[400px]">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="posts" className="cursor-pointer">
                    All Posts
                  </TabsTrigger>
                  <TabsTrigger value="published" className="cursor-pointer">
                    Published
                  </TabsTrigger>
                  <TabsTrigger value="archived" className="cursor-pointer">
                    Archived
                  </TabsTrigger>
                </TabsList>
                <p>Hello World</p>
              </div>
              <TabsContent value="posts">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="published">
                Change your password here.
              </TabsContent>
              <TabsContent value="archived">Archived Posts</TabsContent>
            </Tabs>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-2/3 bg-orange-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          eaque blanditiis in ipsum labore nobis molestiae eum iure asperiores
          harum, ducimus dolores accusamus corrupti sed neque consectetur
          dignissimos similique iste?
        </div>
        <div className="flex-1/3 bg-orange-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quis quia perferendis ipsum quos veniam! Voluptate suscipit optio
          tempore eos cum itaque molestias, eum, repellendus quasi voluptates
          autem officiis adipisci!
        </div>
      </div>
      {/* <div className=""></div> */}
    </div>
  );
};

export default AllPostsPage;
