import Link from "next/link";

export default function DesktopLink({
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
      key={path}
      href={path}
      className={`text-sm font-bold tracking-wide transition-colors duration-200 flex gap-2 items-center ${
        isActive ? "text-[#F3A3B0]" : "text-gray-700"
      }`}
    >
      {text}
    </Link>
  );
}
