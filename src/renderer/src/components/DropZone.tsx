import { useRef, useState } from 'react'
import { UploadIcon } from './icons'

type DropZoneProps = {
  compact: boolean
  onFilesAdded: (files: FileList) => void
}

function DropZone({ compact, onFilesAdded }: DropZoneProps): React.JSX.Element {
  const [isOver, setIsOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleDrop(e: React.DragEvent): void {
    e.preventDefault()
    setIsOver(false)
    onFilesAdded(e.dataTransfer.files)
  }

  if (compact) {
    return (
      <div
        className={`add-bar${isOver ? ' is-over' : ''}`}
        onDragOver={(e) => {
          e.preventDefault()
          setIsOver(true)
        }}
        onDragLeave={() => setIsOver(false)}
        onDrop={handleDrop}
      >
        <UploadIcon size={18} />
        <span>Drop more epubs here</span>
        <button className="add-bar-browse" onClick={() => inputRef.current?.click()}>
          Choose files…
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".epub"
          multiple
          hidden
          onChange={(e) => e.target.files && onFilesAdded(e.target.files)}
        />
      </div>
    )
  }

  return (
    <div
      className={`dropzone${isOver ? ' is-over' : ''}`}
      onDragOver={(e) => {
        e.preventDefault()
        setIsOver(true)
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={handleDrop}
    >
      <UploadIcon />
      <div className="dropzone-title">Drop your epub here</div>
      <div className="dropzone-hint">InkFairy will get it ready for your Kindle</div>
      <button className="dropzone-browse" onClick={() => inputRef.current?.click()}>
        Choose a file…
      </button>
      <input
        ref={inputRef}
        type="file"
        accept=".epub"
        multiple
        hidden
        onChange={(e) => e.target.files && onFilesAdded(e.target.files)}
      />
    </div>
  )
}

export default DropZone
