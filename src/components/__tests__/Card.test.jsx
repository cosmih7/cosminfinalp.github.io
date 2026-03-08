import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";

describe("Card component", () => {
  it("renders name and image", () => {
    const pokemon = { name: "pikachu", image: "https://example.com/pikachu.png" };
    render(<Card pokemon={pokemon} />);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", pokemon.image);
  });
});
