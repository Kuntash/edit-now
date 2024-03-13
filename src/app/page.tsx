"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { App } from "@/components/app";

const client = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

export default function Home() {
  return (
    <ConvexProvider client={client}>
      <App />
    </ConvexProvider>
  );
}
