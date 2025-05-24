import { useEffect, useState } from "react";

export const About = () => {
  const fullText = "Hii, I am Aditya Prasad!";
  const [text, setText] = useState("");
  const speed = 70;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;

      if (index === fullText.length - 1) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-auto flex flex-col justify-center pl-8">
        <div className="mt-32 text-rose-500 mb-12 flex text-6xl font-bold min-h-8">
          {text}
        </div>
        <div className="mt-4 mr-4 max-w-xl">
          I am a frontend developer, and a student studying at BMSIT&M
          Bengaluru, India. Currently learning Backend web dev and more!! I had
          started learning frontend web dev since mid 2024 and currently I have
          a good grasp at it with the following stack
        </div>
      </div>
    </>
  );
};
