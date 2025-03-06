// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    // Verify that the demo todo "Learn React" is rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    // Alternatively, check that at least one todo item is present
    const todoItems = screen.getAllByTestId("todo-item");
    expect(todoItems.length).toBeGreaterThan(0);
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const form = input.closest("form");

    // Simulate user entering a new todo and submitting the form
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.submit(form);

    // Check that the new todo appears
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Initially, the todo is not completed (no line-through style)
    expect(todoItem).toHaveStyle("text-decoration: none");

    // Click the todo item to toggle its completion status
    fireEvent.click(todoItem);

    // Now it should have a line-through indicating completion
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const listItem = todoItem.closest("li");
    const deleteButton = listItem.querySelector('[data-testid="delete-button"]');

    // Click the delete button
    fireEvent.click(deleteButton);

    // Verify that "Learn React" is no longer in the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
