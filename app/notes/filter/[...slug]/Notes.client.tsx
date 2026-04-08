'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { fetchNotes } from '../../../../lib/api/notes';
import NoteList from '@/components/NoteList/NoteList';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';

// Явна типізація пропсів через інтерфейс
interface NotesClientProps {
  tag: string;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  const { data } = useQuery({
    queryKey: ['notes', tag, page, debouncedSearch],
    queryFn: () =>
      fetchNotes({ tag, page, perPage: 10, search: debouncedSearch }),
  });

  const hasNotes = data?.notes && data.notes.length > 0;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <SearchBox value={search} onChange={setSearch} />
        <Link
          href="/notes/action/create"
          style={
            {
              /* твої стилі */
            }
          }
        >
          Add Note +
        </Link>
      </div>

      {/* Рендеримо NoteList лише якщо є нотатки */}
      {hasNotes ? (
        <NoteList notes={data.notes} />
      ) : (
        <p>No notes found for this category.</p>
      )}

      <Pagination
        current={page}
        total={data?.totalPages || 1}
        onChange={setPage}
      />
    </div>
  );
}
