import React, { useEffect, useState } from "react";
import { TextEditor } from "./editor";
import { generateRandomCapitalLetter } from "@/util";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

export const App = () => {
  const createUserMutation = useMutation(api.mutations.users.createUser);
  const updateLastSeenOnlineMutation = useMutation(
    api.mutations.users.updateLastSeenOnline
  );

  const [currentUserId, setCurrentUserId] = useState<Id<"users"> | null>(null);

  useEffect(() => {
    const createUser = async () => {
      const firstName = generateRandomCapitalLetter();
      const lastName = generateRandomCapitalLetter();
      try {
        const userId = await createUserMutation({
          name: `${firstName}.${lastName}`,
        });
        setCurrentUserId(userId as Id<"users">);
      } catch (error) {
        console.log(error);
      }
    };
    createUser();
    const intervalId = setInterval(() => {
      if (currentUserId)
        updateLastSeenOnlineMutation({
          id: currentUserId,
        });
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="min-h-screen flex justify-center bg-slate-100 p-4">
      <TextEditor />
    </main>
  );
};
