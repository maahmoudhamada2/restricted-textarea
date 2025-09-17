export default function Textarea() {
  return (
    <article>
      <header>
        <h1>Write your Message</h1>
      </header>
      <section>
        <textarea placeholder="Start typing..." maxLength={250}></textarea>
        <p>0 / 250</p>
      </section>
    </article>
  );
}
