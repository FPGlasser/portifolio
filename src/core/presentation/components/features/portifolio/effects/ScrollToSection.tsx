"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      return false;
    };

    let attempts = 0;
    const maxAttempts = 10;
    const interval = setInterval(() => {
      const success = tryScroll();
      attempts++;
      if (success || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [pathname, searchParams]);

  return null;
}
