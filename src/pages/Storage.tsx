import axios from "axios";
import { useEffect, useState } from "react";
import { ThoughtCard } from "../components/ThoughtCard";
import type { Thought } from "../types/Thought";

export default function Storage() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);

  async function onDelete(idToRemove: string) {
    setThoughts((prev) => prev.filter((thought) => thought.id !== idToRemove));
    try {
      await axios.delete(`http://localhost:3000/${idToRemove}`);
    } catch (error) {
      console.error(error);
    }
  }

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

        <div className="flex flex-col gap-5 pt-6 w-full max-w-3xl">
          {thoughts.map((thought, index) => (
            <ThoughtCard
              key={thought.id}
              id={thought.id}
              displayNumber={index + 1}
              text={thought.text}
              createdAt={thought.createdAt}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}
