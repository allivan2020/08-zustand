import dynamic from 'next/dynamic';
import { Metadata } from 'next'; // Імпортуємо тип Metadata
import css from './CreateNote.module.css';

// Експортуємо метадані (Це виправить зауваження №5)
export const metadata: Metadata = {
  title: 'Create New Note | NoteHub',
  description: 'Create a new personal note to keep track of your tasks.',
  openGraph: {
    title: 'Create New Note | NoteHub',
    description: 'Create a new personal note to keep track of your tasks.',
    type: 'website',
  },
};

const NoteForm = dynamic(
  () => import('../../../../components/NoteForm/NoteForm'),
  {
    ssr: false,
    loading: () => <p>Loading form...</p>,
  },
);

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
