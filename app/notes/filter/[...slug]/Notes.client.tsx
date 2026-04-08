'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link'; // Добавляем Link

// Используем относительный путь для API (как мы делали в форме)
import { fetchNotes } from '../../../../lib/api/notes';

import NoteList from '@/components/NoteList/NoteList';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';

// УДАЛИЛИ ИМПОРТЫ Modal и NoteForm — они здесь больше не нужны!

export default function NotesClient({ tag }: { tag: string }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // УДАЛИЛИ стейт isModalOpen

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

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <SearchBox value={search} onChange={setSearch} />

        {/* ЗАМЕНЯЕМ КНОПКУ НА ССЫЛКУ ПО ТЗ */}
        <Link
          href="/notes/action/create"
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Add Note +
        </Link>
      </div>

      <NoteList notes={data?.notes || []} />

      <Pagination
        current={page}
        total={data?.totalPages || 1}
        onChange={setPage}
      />
    </div>
  );
}
