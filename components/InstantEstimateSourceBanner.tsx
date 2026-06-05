"use client";

import { useEffect, useState } from "react";
import {
  getMarketingSourceBanner,
  resolveMarketingSource,
  type MarketingSourceKey,
} from "@/lib/marketing/sources";

export default function InstantEstimateSourceBanner() {
  const [source, setSource] = useState<MarketingSourceKey | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSource(resolveMarketingSource(params));
  }, []);

  if (!source) return null;

  return (
    <p className="mx-auto max-w-2xl text-center text-sm text-stone-600">
      {getMarketingSourceBanner(source)}
    </p>
  );
}
