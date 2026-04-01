export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <video
        src="/JAKE-RYAN.mp4"
        poster="/lead-in-image.png"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        className="h-screen w-screen object-contain"
      />
    </div>
  );
}
