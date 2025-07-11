import React, {useState, useEffect} from "react";

function TypingText({text = "", speed = 100, className = ""}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    // Reset teks sebelum mulai
    setDisplayedText("");

    // Cegah kalau text bukan string
    if (typeof text !== "string" || text.length === 0) return;

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h2 className={`font-bold ${className}`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </h2>
  );
}

export default TypingText;
