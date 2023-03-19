import { useCallback, useMemo, useState } from 'react'
import Todo from './Todo';

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (var i = 0; i < 100; i++) {
    num += 1;
  }
  return num;
};

const App = () => {

  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const addTodo = useCallback(() => {
    setTodos([...todos, "New Todo"]);
  }, [todos])

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </>
  )
}

export default App