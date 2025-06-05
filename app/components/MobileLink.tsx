import Link from "next/link";

export default function MobileLink({
  isActive,
  path,
  text,
}: {
  isActive: boolean;
  path: string;
  text: string;
}) {
  return (
    <Link
      href={path}
      className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 flex gap-2 items-center ${
        isActive ? "text-[#F3A3B0]" : "text-gray-700"
      }`}
    >
      {text}
    </Link>
  );
}
