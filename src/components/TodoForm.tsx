import { useState, type FormEvent } from 'react'

interface Props {
  onAdd: (text: string) => void
}

export function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="新しいTODOを入力..."
        autoFocus
      />
      <button type="submit" className="btn btn-add" disabled={!text.trim()}>
        追加
      </button>
    </form>
  )
}
