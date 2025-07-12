import {useEffect, useState} from "react";

const texts = ["Frontend Developer", "Student"];
const speed = 100;
const pause = 1500;

export default function SwitchingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }, speed);
    } else {
      if (text !== currentText) {
        timeout = setTimeout(() => {
          setText((prev) => prev + currentText[prev.length]);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return <span>{text}|</span>;
}
