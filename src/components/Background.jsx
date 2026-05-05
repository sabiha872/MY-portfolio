function Background({ theme }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/dev-bg.mp4" type="video/mp4" />
      </video>

     <div
  className={`absolute inset-0 ${
    theme === "dark"
      ? "bg-black/80"
      : "bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200"
  }`}
/>
    </div>
  );
}

export default Background;