import { expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { CarForm } from "../components";

it("displays form with 'Add Car' title and 'Submit' button", async () => {
  const carForm = renderWithProviders(<CarForm />);
  expect(await screen.findByText(/Add Car/)).toBeTruthy();
  expect(await screen.findByText(/Submit/)).toBeTruthy();
  carForm.unmount();
});
