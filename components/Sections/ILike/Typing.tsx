import React, { FC, useEffect, useState } from "react";

interface TypingProps {
  content: string;
  className?: string;
}

export const Typing: FC<TypingProps> = ({ content, className }) => {
  const [currentContent, setCurrentContent] = useState("");
  const [isBlinking, setIsBlinking] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    new Promise(() => {
      setTimeout(() => {
        drawNextChar(Array.from(content));
      }, 1600);
    });
  }, []);

  useEffect(() => {
    if (!isBlinking) {
      setIsVisible(true);
      return;
    }

    const blinkingInterval = setInterval(() => {
      setIsVisible((currentIsVisible) => !currentIsVisible);
    }, 700);
    return () => clearInterval(blinkingInterval);
  }, [isBlinking]);

  const drawNextChar = async (chars: string[]) => {
    if (chars.length) {
      setIsBlinking(false);
      const time = Math.random() * 400 + 100;
      await new Promise((res) => setTimeout(res, time));
      setCurrentContent((old) => old.concat(chars[0]));

      drawNextChar(chars.slice(1));
    } else {
      await new Promise((res) => setTimeout(res, 700));
      setIsBlinking(true);
    }
  };

  return (
    <div className="flex">
      <p className={className}>{currentContent}</p>
      <p
        className={`${isVisible ? "" : "invisible"} ${
          className ? className : ""
        }`}
      >
        _
      </p>
    </div>
  );
};
