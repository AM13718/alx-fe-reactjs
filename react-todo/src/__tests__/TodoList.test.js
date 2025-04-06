// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    const todoItems = screen.getAllByTestId("todo-item");
    expect(todoItems.length).toBeGreaterThan(0);
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.submit(form);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    expect(todoItem).toHaveStyle("text-decoration: none");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const listItem = todoItem.closest("li");
    const deleteButton = listItem.querySelector('[data-testid="delete-button"]');

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});

