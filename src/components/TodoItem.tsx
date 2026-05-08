import type { Todo } from '../types'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        className="todo-checkbox"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? '未完了に戻す' : '完了にする'}
      >
        {todo.completed ? '✓' : ''}
      </button>
      <span className="todo-text">{todo.text}</span>
      <button
        className="btn btn-delete"
        onClick={() => onDelete(todo.id)}
        aria-label="削除"
      >
        削除
      </button>
    </li>
  )
}
