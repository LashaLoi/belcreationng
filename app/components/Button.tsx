"use client";

import React, { type PropsWithChildren } from "react";
import { motion } from "framer-motion";

type ButtonProps = PropsWithChildren<{
  disabled?: boolean;
  className?: string;
}>;

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  className,
}) => {
  return (
    <motion.button
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      className={`px-8 py-2 rounded-md bg-[#F3A3B0] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#F3A3B0] ${className ?? ""}`}
    >
      {children}
    </motion.button>
  );
};
