import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-70px)] flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Page not found</h2>
      <p>We couldn&apos;t find the page you&apos;re looking for</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-black px-4 py-4 text-white hover:bg-gray-800"
      >
        Back to home
      </Link>
    </div>
  );
}
