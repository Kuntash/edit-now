"use client";
import { TextEditor } from "@/components/editor";
import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";
import { generateRandomCapitalLetter } from "@/util";

const client = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

export default function Home() {

  return (
    <ConvexProvider client={client}>
      <main className="min-h-screen flex justify-center bg-slate-100 p-4">
        <TextEditor />
      </main>
    </ConvexProvider>
  );
}
