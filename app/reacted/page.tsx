"use client";
import React from "react";
import { useReducer } from "react";
import { useForm } from "react-hook-form";

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo: any) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

const page = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data : any) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register} type="file" name="picture" />
            <button>Submit</button>
        </form>
    );
};

export default page;
