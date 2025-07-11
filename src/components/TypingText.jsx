import React, {useState, useEffect} from "react";

function TypingText({text = "", speed = 100, className = ""}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");

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
    <span className={`font-bold ${className}`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default TypingText;
