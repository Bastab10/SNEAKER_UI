export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-7 gap-y-4 px-6 py-12 text-sm text-gray-600">
        <p>© 2026 SNEAKER. All rights reserved</p>

        <a
          href="#"
          className="transition-colors hover:text-black"
        >
          Terms of Use
        </a>

        <a
          href="#"
          className="transition-colors hover:text-black"
        >
          Privacy Policy
        </a>

        <a
          href="#"
          className="transition-colors hover:text-black"
        >
          Store Claim Policy
        </a>
      </div>
    </footer>
  );
}