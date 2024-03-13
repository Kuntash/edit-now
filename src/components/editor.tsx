"use client";

import { useMutation, useQuery } from "convex/react";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { api } from "../../convex/_generated/api";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useDebounce } from "@/hooks/use-debounce";

export const TextEditor = () => {
  const activeUsers = useQuery(api.queries.users.getActiveUsers);
  const updateDocumentMutation = useMutation(
    api.mutations.documents.updateDocument
  );
  const document = useQuery(api.queries.documents.getDocument);

  const [value, setValue] = useState("<p>Write something here</p>");

  const updateChangedHTML = async () => {
    console.log("Update html");
    if (document?._id)
      await updateDocumentMutation({
        id: document?._id,
        body: value,
      });
  };

  const debouncedUpdateChangedHTML = useDebounce(updateChangedHTML);

  const onChange = (changedHTML: string) => {
    setValue(changedHTML);
    debouncedUpdateChangedHTML();
  };

  useEffect(() => {
    setValue(document?.body as string);
  }, [document]);

  return (
    <div className="max-w-[800px] w-full flex flex-col gap-y-4 items-center">
      {/* Container for avatars  */}
      <div className="bg-white w-full rounded-lg shadow-md p-2 flex gap-x-2">
        {activeUsers?.map((activeUser) => (
          <Avatar
            key={activeUser?._id}
            className="bg-white border border-green-500"
          >
            <AvatarFallback className="text-sm">
              {activeUser?.name}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      {/* Editor */}
      <div className="flex-1 bg-white w-full rounded-lg shadow-md overflow-hidden p-4">
        <ReactQuill
          value={value}
          onChange={onChange}
          theme="bubble"
          className="h-full"
        />
      </div>
    </div>
  );
};
