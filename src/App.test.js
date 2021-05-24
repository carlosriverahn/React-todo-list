import React from 'react'
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import '@testing-library/jest-dom/extend-expect'
import App from './App';


let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders Correctly ", () =>{
  const {queryByTestId, queryByPlaceholderText} = render(<App/>);

  expect(queryByTestId("add")).toBeTruthy()
  expect(queryByPlaceholderText("New Task")).toBeTruthy()
})
