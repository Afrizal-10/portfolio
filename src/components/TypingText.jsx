import {useState, useEffect} from "react";

function TypingText({text = "", speed = 100, className = ""}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;

    setDisplayedText("");
    let interval = setInterval(() => {
      setDisplayedText((prev) => {
        const nextChar = text.charAt(prev.length);
        const nextText = prev + nextChar;

        if (nextText.length === text.length) {
          clearInterval(interval);
        }

        return nextText;
      });
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
