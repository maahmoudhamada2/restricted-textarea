export default function Textarea() {
  return (
    <article className=" w-[40%] mx-auto mt-[50px] ">
      <header className="w-[100%] mb-[1rem]">
        <h1 className="text-2xl font-medium">Write your Message</h1>
      </header>
      <section className="relative">
        <textarea
          className="w-full h-[150px] p-[1rem] rounded-2xl resize-none border-2"
          placeholder="Start typing..."
          maxLength={250}></textarea>
        <p className="absolute right-[1rem] bottom-[1rem]">0 / 250</p>
      </section>
    </article>
  );
}
