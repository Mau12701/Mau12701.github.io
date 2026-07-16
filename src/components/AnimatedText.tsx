import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface Props {
  text: string;
}

export default function AnimatedText({ text }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      style={{
        fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
        color: "rgba(255,255,255,0.85)",
        fontWeight: 600,
        lineHeight: 1.9,
        letterSpacing: "-0.02em",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 2rem",
        textAlign: "center",
      }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

function Word({ word, progress, start, end }: WordProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        display: "inline-block",
        marginRight: "0.35rem",
      }}
    >
      {word}
    </motion.span>
  );
}