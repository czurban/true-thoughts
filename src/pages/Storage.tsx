import axios from "axios";
import { useEffect, useState } from "react";
import { ThoughtCard } from "../components/ThoughtCard";
import type { Thought } from "../types/Thought";

export default function Storage() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);

  useEffect(() => {
    const loadThoughts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        setThoughts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadThoughts();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center text-center pt-25">
        <h2 className="font-bold text-3xl text-white">Your Storage</h2>

        <div className="flex flex-col gap-4 pt-6 w-full max-w-md">
          {thoughts.map((thought) => (
            <ThoughtCard
              key={thought.id}
              id={thought.id}
              text={thought.text}
              createdAt={thought.createdAt}
            />
          ))}
        </div>
      </div>
    </>
  );
}
