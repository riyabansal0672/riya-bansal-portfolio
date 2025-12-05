"use client";

import { useState } from "react";
import storyData from "../../data/story.json";

export default function StoryPage() {
  const [currentId, setCurrentId] = useState("start");
  const currentNode = storyData.find((node) => node.id === currentId);

  return (
    <div className="max-w-3xl mx-auto p-10 text-zinc-800">
      <h1 className="text-4xl font-bold mb-8">Riya's Interactive Story</h1>

      <p className="mb-6">{currentNode.text}</p>

      <div className="flex flex-col gap-4">
        {currentNode.options.map((option) => (
          <button
            key={option.text}
            onClick={() => setCurrentId(option.next)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
