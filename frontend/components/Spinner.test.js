// Import the Spinner component into this file and test
import Spinner from "./Spinner"
import React from "react"
import {render, screen} from "@testing-library/react"
// that it renders what it should for the different props it can take.
test('sanity', () => {
  expect(true).toBe(true)
});

test('renders without error', () => {
  render(<Spinner on={true} />);
})

test('renders the message of Please wait passes as prop', () => {
  render(<Spinner on={true} />); 
  const please = screen.queryByText(/Please wait.../i);
  expect(please).toBeTruthy;
});
