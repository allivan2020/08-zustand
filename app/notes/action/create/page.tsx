import dynamic from 'next/dynamic';
import React from 'react';
import css from './CreateNote.module.css';

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
