import { useEffect, useState } from "react";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-0"
      style={{
        background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(168,85,247,0.15), transparent 200px)`
      }}
    />
  );
}

export default CursorGlow;