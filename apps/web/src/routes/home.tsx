import type { Route } from "./+types/home";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/welcome")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching welcome message:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{loading ? "Loading..." : message}</h1>
    </div>
  );
}
