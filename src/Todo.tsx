import { memo } from "react";

interface Props {
    todos: string[];
    addTodo: () => void;
}

const Todo: React.FC<Props> = ({ todos, addTodo }) => {
    console.log('Me dibuje');
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => <p key={index}>{todo}</p>)}
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default memo(Todo)