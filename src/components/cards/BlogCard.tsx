import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "../ui/card";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type BlogCardProps = {
  title: string;
  description: string;
  imageUri: string;
  href: string;
};

export const BlogCard = ({
  title,
  description,
  href,
  imageUri,
}: BlogCardProps) => (
  <Link href={href} className="group border-0 flex-1">
    <Card className="p-0 ring-0">
      <CardContent className="p-4 flex flex-col  gap-4">
        {/**card chips categories */}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardHeader className="rounded-16 group-not-first:basis-2/5 relative w-full p-0">
          <Image
            src={imageUri}
            alt="placeholder image"
            width={800}
            height={600}
            className="block rounded-[16px] object-cover w-full h-[120px]"
          />
        </CardHeader>
        <CardFooter>{/** Card actions (like, share, */}</CardFooter>
      </CardContent>
    </Card>
  </Link>
);
