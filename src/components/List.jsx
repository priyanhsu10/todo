function List({ todos, setCompleted }) {
  console.log(todos);

  return (
    <section>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>description</th>
          <th>is Competed</th>
          <th></th>
        </tr>
        {todos.map((todoItem) => {
          return (
            <tr key={todoItem.id}>
              <td>{todoItem.id}</td>
              <td>{todoItem.name}</td>
              <td>{todoItem.description}</td>
              <td>{todoItem.completed ? "Yes" : "No"}</td>
              <td>
                <button type="button" onClick={() => setCompleted(todoItem)}>
                  mark completed
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}

export default List;
