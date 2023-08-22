'use client';
import useStore from '@/store/useStore';
import React, { useState } from 'react';

const page = () => {
    const [todo, setTodo] = useState<string>('');
    const todos = useStore((state) => state.todos);
    const addTodo = useStore((state) => state.addTodo);

    const add = () => {
        addTodo(todo);
    };
    return (
        <div>
            <div>Todo list</div>
            <input
                className="border-black"
                type="text"
                onChange={(e) => setTodo(e.target.value)}
            ></input>
            <button onClick={add} className="border-black">Add</button>
            {todos.map((todo) => (
                <div>{todo}</div>
            ))}
        </div>
    );
};

export default page;
