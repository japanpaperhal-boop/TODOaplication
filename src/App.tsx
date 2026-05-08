import { useTodos } from './hooks/useTodos'
import { TodoForm } from './components/TodoForm'
import { TodoItem } from './components/TodoItem'

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos()

  const remaining = todos.filter(t => !t.completed).length

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">TODOアプリ</h1>
        {todos.length > 0 && (
          <p className="counter">
            残り <strong>{remaining}</strong> / {todos.length} 件
          </p>
        )}
      </header>

      <TodoForm onAdd={addTodo} />

      {todos.length === 0 ? (
        <p className="empty">TODOがありません。上から追加してください。</p>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
