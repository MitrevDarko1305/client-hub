"use client"

import Hero, { SystemPreviewGrid } from "./Client-Hub-Hero/Hero";
import SystemExplanation from "./Client-Hub-Hero/System-Explanation";


export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero/>
      <SystemPreviewGrid/>
      <SystemExplanation/>
    </main>
  );
}