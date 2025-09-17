import { useState } from "react";

export default function Textarea() {
  const [counter, setCounter] = useState(0);

  const handleChange = (event) => {
    setCounter(event.target.value.length);
  };

  return (
    <article className="w-[40%] mx-auto mt-[50px]">
      <header className="w-[100%] mb-[1rem]">
        <h1 className="text-2xl font-medium">Write your Message</h1>
      </header>
      <section className="relative">
        <textarea
          className={`w-full h-[150px] p-[1rem] rounded-2xl resize-none border-1 ${
            counter === 250 ? "text-red-500 focus-within:outline-red-500" : null
          }`}
          placeholder="Start typing..."
          maxLength={250}
          onChange={handleChange}></textarea>
        <p
          className={`absolute right-[1rem] bottom-[1rem] ${
            counter === 250 ? "text-red-500" : null
          }`}>
          {counter} / 250
        </p>
      </section>
    </article>
  );
}
