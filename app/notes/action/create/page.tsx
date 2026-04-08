// import dynamic from 'next/dynamic';
// import React from 'react';
import css from './CreateNote.module.css';

// const NoteForm = dynamic(
//   () =>
//     import('../../../../components/NoteForm/NoteForm').then(
//       (mod) => mod.default,
//     ),
//   {
//     ssr: false,
//     loading: () => <p>Loading form...</p>,
//   },
// );

import NoteForm from '../../../../components/NoteForm/NoteForm';

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
