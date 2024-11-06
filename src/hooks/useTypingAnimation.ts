import { useEffect, useState } from 'react';

interface UseTypingAnimation {
  text: string;
  delay: number;
}

export function useTypingAnimation({ text, delay }: UseTypingAnimation) {
  const [typingText, setTypingText] = useState(text[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypingText((prev) => {
        const newStateIdx = typingText.length;
        if (newStateIdx === text.length) return text[0];
        const newState = text[newStateIdx];
        return prev + newState;
      });
    }, delay);

    return () => clearInterval(timer);
  }, [typingText]);

  return { typingText };
}
