import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-end px-3 sm:h-10 sm:px-6">
        <div className="flex items-center gap-2.5 text-[11px] font-medium sm:gap-3 sm:text-xs">
          <Link href="/help" className="transition-colors hover:text-gray-500">
            Help
          </Link>

          <span className="text-gray-300">|</span>

          <Link href="/signup" className="transition-colors hover:text-gray-500">
            Sign Up
          </Link>

          <span className="text-gray-300">|</span>

          <Link href="/login" className="transition-colors hover:text-gray-500">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
