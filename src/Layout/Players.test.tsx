import React from 'react';
import { render } from '@testing-library/react';
import Players from "./PlayersList/Players";

describe("Players component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Players />);

    expect(asFragment()).toMatchSnapshot();
  });
});
