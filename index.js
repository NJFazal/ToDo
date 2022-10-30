function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Halloween Costume',
      isCompleted: false,
    },
    {
      text: 'Carve Pumpkin',
      isCompleted: false,
    },
    {
      text: 'Halloween Party',
      isCompleted: false,
    },
    {
      text: 'Chill with some ghosts',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
