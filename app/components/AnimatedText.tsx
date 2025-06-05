import { motion } from "framer-motion";

const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <p className={className}>
      <motion.span
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        initial="hidden"
        animate="visible"
        aria-hidden
      >
        {text.split("").map((char, charIndex) => (
          <motion.span
            variants={defaultAnimation}
            key={`${char}-${charIndex}`}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </p>
  );
}
