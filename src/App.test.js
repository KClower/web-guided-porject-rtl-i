
import React from "react";

// need these imports to render components in a virtual DOM
import { render, screen } from "@testing-library/react";

// need to import the component we are testing/rendering
import App from "./App";



// we are using jest global functions to write our test
// jest is going to be our "test runner" 
// -test() is used to run a test
// -test takes 2 parameters (title, callback) to run test
test('renders App without errors', () => {
  render(<App />);


  // tests will fail if an error is "thrown" 
  // from any function/component inside the callback
  // breakTheTest(true);
});
// function breakTheTest(someValue) {
//   if (someValue === true) {
//     // do nothing
//   } else {
//     throw new Error("This test failed because we manually threw an error inside 'breakTheTest'");
//   }
// }

// now we will query the virtual dom for an element and make an "assertion" about that element
test('App rendersthe form header', () => {
  // Arrange
  const container = render(<App />);
  // adding a variable to the render is not nessesary
  // console logging lets us see the different ways to query for element
  // console.log(container)

  // Act
  // query for the header element
  // adding a variable to the query helps with the assertion
  const header = screen.getByText(/add new animal/i)

  // Assert
  // make an assertion
  expect(header).toBeInTheDocument()
})

