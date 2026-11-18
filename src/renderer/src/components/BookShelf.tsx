import type { Book } from '../types'
import BookCard from './BookCard'

type BookShelfProps = {
  books: Book[]
  onConvert: (id: string) => void
  onRemove: (id: string) => void
}

function BookShelf({ books, onConvert, onRemove }: BookShelfProps): React.JSX.Element {
  return (
    <div className="shelf">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onConvert={onConvert} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default BookShelf
