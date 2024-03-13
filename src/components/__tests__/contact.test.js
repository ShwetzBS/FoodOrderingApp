import { contactUs } from "../contactUsComponent";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
export const contactUs = () => {
  //Check if the componenet got loaded or not

  test("Testing ContactUs", () => {
    //Before anything we need to make sure the component renders (loads) to the JSDOM

    render(<contactUs></contactUs>);

    // We will check if the header which says (Contact us page) comes on the screen

    const heading = screen.getByRole("heading"); //finds all headings inside the component

    // To find button
    //const button = screen.getByRole("button");

    expect(heading).toBeInTheDocument(); //Check if component has loaded succesfully

    //expect(button).toBeInTheDocument();
  });

  // can be used it instead of test

  it("Check the number of input boxes", () => {
    render(<contactUs></contactUs>);

    //Expecting an array

    const inputBoxes = screen.getAllByRole("textbox");

    //See if the count is 2 in total

    expect(inputBoxes.length).toBe(2);
    //expect(inputBoxes.length).not.toBe(3);
  });
};
