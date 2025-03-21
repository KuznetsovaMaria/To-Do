import TodoItem from './TodoItem';

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <>
      <ul className="items-list">
        {todos.length === 0 && 'No plans made yet'}

        {todos.map((todo) => (
          <TodoItem
            // passing all props for todo: completed, id, title
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        ))}
      </ul>
    </>
  );
}
