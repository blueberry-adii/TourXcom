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
      <div className="h-auto flex flex-col justify-center items-center px-8">
        <div className="my-8 leading-16 max-[400px]:leading-12 text-rose-500 flex text-[min(16vw,70px)] max-w-[min(65vw,480px)] font-bold text-center">
          {text}
        </div>
        <div className="max-w-xl text-justify">
          I am a frontend developer, and a student studying at BMSIT&M
          Bengaluru, India. Currently learning Backend web dev and more!! I had
          started learning frontend web dev since mid 2024 and currently I have
          a good grasp at it with the following stack.
        </div>
      </div>
    </>
  );
};
