import express, { Request, Response } from "express";
import { Todo } from "../types/todo";

const todos: Todo[] = [
  { id: 1, title: "buy food", date: "2025-07-28", completed: false },
  { id: 2, title: "buy milk", date: "2025-07-30", completed: false },
  { id: 3, title: "buy cake", date: "2025-07-27", completed: true },
  { id: 4, title: "buy dosa", date: "2025-06-30", completed: false },
];

export const display_todos = (req: Request, res: Response) => {
  try {
    if (todos.length < 1) res.status(400).send("no todos to display");
    res.status(200).send(todos);
    return;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    res.status(200).send("some server issue");
  }
};

export const add_todos = (req: Request, res: Response) => {
  try {
    const { title, date, completed } = req.body;
    console.log(req.body);

    if (!title || !date) {
      res.status(404).send({ message: "bro all fireld required" });
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: title,
      date: date,
      completed: completed || false,
    };
    todos.push(newTodo);

    console.log(todos);
    res.status(200).send({ message: "todo inserted successfully" });

    return;
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message);
    return;
  }
};
