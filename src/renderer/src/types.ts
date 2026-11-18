export type BookStatus = 'waiting' | 'converting' | 'done'

export interface Book {
  id: string
  title: string
  author: string
  status: BookStatus
  progress: number
}
