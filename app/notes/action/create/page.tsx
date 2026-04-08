import dynamic from "next/dynamic";
import css from "./CreateNote.module.css";

// Імпортуємо форму динамічно (SSR: false прибере всі помилки гідратації та рендерів)
const NoteForm = dynamic(() => import("@/components/NoteForm/NoteForm"), {
  ssr: false,
  loading: () => <p>Loading form...</p>,
});

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
