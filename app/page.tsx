export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <video
        src="/CITADEL-GOLD-VIDEO.mp4"
        autoPlay
        muted
        playsInline
        controls
        className="max-h-screen max-w-full"
      />
    </div>
  );
}
