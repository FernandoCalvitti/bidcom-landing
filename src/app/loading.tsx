export default function Loading() {
  return (
    <div
      className={
        "flex h-[calc(100vh-70px)] items-center justify-center bg-white"
      }
    >
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
    </div>
  );
}
