"use client";

import { useChat } from "ai/react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Chat() {
  const session = await getServerSession(authOptions);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-screen bg-black-100">
      {session && <h1>Session:</h1>}
      <div className="flex h-20 items-center justify-center bg-blue-500 p-4">
        <h1 className="text-white text-2xl">Chatbot AI</h1>
      </div>
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.map((m) => (
          <div key={m.id} className="blackspace-pre-wrap">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black" // Added "text-black" to change input color to black
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
