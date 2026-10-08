import Link from "next/link";

export default function TopBar() {
  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-end px-6">
        <div className="flex items-center gap-3 text-xs font-medium">
          <Link href="/help" className="hover:text-gray-500">
            Help
          </Link>

          <span className="text-gray-300">|</span>

          <Link href="/signup" className="hover:text-gray-500">
            Sign Up
          </Link>

          <span className="text-gray-300">|</span>

          <Link href="/login" className="hover:text-gray-500">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}