import { Metadata } from 'next';
import React from 'react';
import css from './CreateNote.module.css';

// Звичайний імпорт нашої клієнтської обгортки
import NoteFormWrapper from '../../../../components/NoteForm/NoteFormWrapper';

// Додаємо SEO метадані (Це виправить зауваження ментора)
export const metadata: Metadata = {
  title: 'Create Note | NoteHub',
  description: 'Create a new note to stay organized.',
  openGraph: {
    title: 'Create Note | NoteHub',
    description: 'Create a new note to stay organized.',
    type: 'website',
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        {/* Використовуємо обгортку */}
        <NoteFormWrapper />
      </div>
    </main>
  );
}
