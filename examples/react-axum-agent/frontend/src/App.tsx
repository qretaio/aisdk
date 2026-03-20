"use client";

import "./App.css";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useState } from "react";

export default function App() {
	const { messages, sendMessage, status, error } = useChat({
		transport: new DefaultChatTransport({
			api: "http://localhost:8080/api/chat",
		}),
	});
	const [input, setInput] = useState("");

	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, [error]);

	return (
		<>
			{messages.map((message) => (
				<div key={message.id}>
					{message.role === "user" ? "User: " : "AI: "}
					{message.parts.map((part, index) =>
						part.type === "text" ? <span key={index}>{part.text}</span> : null,
					)}
				</div>
			))}

			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (input.trim()) {
						sendMessage({ text: input });
						setInput("");
					}
				}}
			>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					disabled={status !== "ready"}
					placeholder="Say something..."
				/>
				<button type="submit" disabled={status !== "ready"}>
					Submit
				</button>
			</form>
		</>
	);
}
