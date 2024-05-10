
import React from "react";

// need these imports to render components in a virtual DOM
import { render, screen, fireEvent } from "@testing-library/react";

// need to import the component we are testing/rendering
import AnimalForm from "./AnimalForm";




test("AnimalForm adds new animals to the list", () => {
    //      ARRANGE
    render(<AnimalForm />);


    //        ACT
    // type into all three inputs
    //  1. query for all inputs
    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    //  2. run the change event to add text
    // fireEvent is for when checking for an event
    // fireEvent needs to be imported
    fireEvent.change(speciesInput, { target: { value: 'Monkey' } })
    fireEvent.change(ageInput, { target: { value: 15 } })
    fireEvent.change(notesInput, { target: { value: 'ugly' } })

    // click submit! button
    //  1. query for the button
    const submitButton = screen.getByText(/submit/i);

    //  2. run the click event on the button
    fireEvent.click(submitButton);

    //      ASSERT
    // assert that my animal is in the list
    //  1. query for the new animal text
    const newAnimal = screen.getByText(/monkey/i);
    //const newAnimal = screen.getByLabelText("15");
    // const newNotes = screen.getByText(/ugly/i);

    //  2. assert that it is being rendered
    expect(newAnimal).toBeInTheDocument();
})