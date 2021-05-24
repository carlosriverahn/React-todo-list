import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import '@testing-library/jest-dom/extend-expect'
import TaskForm from './TaskForm';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container)
});

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove();
  container = null;
});

it("Renders Correctly ", () =>{
  const {queryByTestId, queryByPlaceholderText} = render(<TaskForm/>);

  expect(queryByTestId("add")).toBeTruthy()
  expect(queryByPlaceholderText("New Task")).toBeTruthy()
})

describe("Input value", ()=>{
  it("updates on change",()=>{
    const {queryByPlaceholderText} = render(<TaskForm/>)

    const inputText = queryByPlaceholderText("New Task");

    fireEvent.change(inputText, {target: {value: "Test"}})
    expect(inputText.value).toBe("Test")
    })
})

describe("click on the button",()=>{
  it("click on the button", ()=>{
    const handleClick = jest.fn()
    const {getByTestId} = render(<TaskForm handleClick={handleClick}/>)
    fireEvent.click(getByTestId("add"))
    expect(handleClick).not.toHaveBeenCalled()
  })
})

