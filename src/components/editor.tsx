"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export const TextEditor = () => {

  
  const [value, setValue] = useState("<p>Write something here</p>");
  return (
    <div className="max-w-[800px] w-full flex flex-col gap-y-4 items-center">
      {/* Container for avatars  */}
      <div className="bg-white w-full rounded-lg shadow-md p-2 h-10">

      </div>
      {/* Editor */}
      <div className="flex-1 bg-white w-full rounded-lg shadow-md overflow-hidden p-4">
        <ReactQuill
          value={value}
          onChange={(changedHTML) => {
            setValue(changedHTML);
          }}
          theme="bubble"
          className="h-full"
        />
      </div>
    </div>
  );
};
