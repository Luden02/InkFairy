import type { Book } from '../types'
import { CheckIcon, SparkleIcon, XIcon } from './icons'

type BookCardProps = {
  book: Book
  onConvert: (id: string) => void
  onRemove: (id: string) => void
}

function BookCard({ book, onConvert, onRemove }: BookCardProps): React.JSX.Element {
  const isConverting = book.status === 'converting'
  const isDone = book.status === 'done'

  return (
    <div className="book-card">
      <div className={`book-cover${isConverting ? ' is-converting' : ''}`}>
        <span className="book-cover-letter">{book.title.charAt(0).toUpperCase()}</span>
        {isDone && (
          <span className="book-done-badge">
            <CheckIcon />
          </span>
        )}
      </div>

      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>

      {isConverting ? (
        <>
          <div className="book-progress-track">
            <div className="book-progress-fill" style={{ width: `${book.progress}%` }} />
          </div>
          <div className="book-status">Converting… {book.progress}%</div>
        </>
      ) : (
        <div className="book-actions">
          {isDone ? (
            <div className="book-status">Ready for your Kindle</div>
          ) : (
            <button className="book-convert" onClick={() => onConvert(book.id)}>
              <SparkleIcon />
              Convert
            </button>
          )}
          <button className="book-remove" onClick={() => onRemove(book.id)} title="Remove">
            <XIcon />
          </button>
        </div>
      )}
    </div>
  )
}

export default BookCard
