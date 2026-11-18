import { useEffect, useState } from 'react'
import TitleBar from './components/TitleBar'
import DropZone from './components/DropZone'
import BookShelf from './components/BookShelf'
import SettingsView from './components/SettingsView'
import type { Book } from './types'

let nextId = 0

function titleFromFilename(filename: string): string {
  return filename.replace(/\.epub$/i, '').replace(/[-_]/g, ' ')
}

function App(): React.JSX.Element {
  const [view, setView] = useState<'library' | 'settings'>('library')
  const [books, setBooks] = useState<Book[]>([
    {
      id: 'demo-1',
      title: 'The Night Circus',
      author: 'Erin Morgenstern',
      status: 'done',
      progress: 100
    },
    {
      id: 'demo-2',
      title: 'Piranesi',
      author: 'Susanna Clarke',
      status: 'converting',
      progress: 48
    },
    { id: 'demo-3', title: 'Circe', author: 'Madeline Miller', status: 'waiting', progress: 0 }
  ])

  // ponytail: demo-only progress animation standing in for real conversion events.
  useEffect(() => {
    const tick = setInterval(() => {
      setBooks((prev) =>
        prev.map((book) =>
          book.status === 'converting'
            ? book.progress >= 100
              ? { ...book, status: 'done', progress: 100 }
              : { ...book, progress: Math.min(100, book.progress + 8) }
            : book
        )
      )
    }, 300)
    return () => clearInterval(tick)
  }, [])

  function handleFilesAdded(files: FileList): void {
    const added = Array.from(files)
      .filter((file) => file.name.toLowerCase().endsWith('.epub'))
      .map((file) => ({
        id: `book-${nextId++}`,
        title: titleFromFilename(file.name),
        author: 'Unknown author',
        status: 'waiting' as const,
        progress: 0
      }))
    setBooks((prev) => [...prev, ...added])
  }

  function handleConvert(id: string): void {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, status: 'converting', progress: 0 } : book))
    )
  }

  function handleRemove(id: string): void {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  return (
    <>
      <TitleBar
        showingSettings={view === 'settings'}
        onToggleSettings={() => setView(view === 'settings' ? 'library' : 'settings')}
      />
      <div className="page">
        <div className="page-content" key={view}>
          {view === 'settings' ? (
            <SettingsView />
          ) : books.length === 0 ? (
            <DropZone compact={false} onFilesAdded={handleFilesAdded} />
          ) : (
            <>
              <DropZone compact onFilesAdded={handleFilesAdded} />
              <BookShelf books={books} onConvert={handleConvert} onRemove={handleRemove} />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
