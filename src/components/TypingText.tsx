import { useEffect, useState } from "react";

interface TypingTextProps {
  phrases: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}

/**
 * TypingText
 * Cycles through phrases with a typewriter effect. Picks the next phrase
 * randomly (without immediate repeat) after holding the full phrase.
 */
export function TypingText({
  phrases,
  className,
  typeSpeed = 90,
  deleteSpeed = 40,
  holdTime = 1800,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const current = phrases[index] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), holdTime);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        // pick a new random phrase, avoiding immediate repeat
        let next = index;
        if (phrases.length > 1) {
          while (next === index) next = Math.floor(Math.random() * phrases.length);
        }
        setIndex(next);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index, phrases, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[0.08em] -mb-1 ml-1 h-[0.9em] align-middle bg-current animate-pulse" />
    </span>
  );
}
