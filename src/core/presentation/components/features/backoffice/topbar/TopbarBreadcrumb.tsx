"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/core/presentation/components/ui/breadcrumb";
import { Link, usePathname } from "@/i18n/navigation";
import React from "react";

export const TopBarBreadcrumb = () => {
  const pathname = usePathname();
  const pathnameArr = pathname.split("/").slice(1);
  const pathnameLength = pathnameArr.length - 1;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathnameArr.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem className="hidden md:block" key={index}>
              <BreadcrumbLink
                href={`/${pathnameArr.slice(0, index + 1).join("/")}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < pathnameLength && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
