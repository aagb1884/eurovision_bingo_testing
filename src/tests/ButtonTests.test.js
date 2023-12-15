import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import Button from '../Components/Button';

describe("Button", () => {
  let container;

  beforeEach(() => {
    container = render(< Button />);
  });

  it('should be inactive when unpressed', () => {
    const cardButton = container.getByTestId("card-button");
    const buttonStyle = window.getComputedStyle(cardButton)
    expect(buttonStyle.color).toBe("black")
  });

  it('should be active when pressed', () => {
    const cardButton = container.getByTestId("card-button");
    fireEvent.click(cardButton)
    const buttonStyle = window.getComputedStyle(cardButton)
    
    expect(buttonStyle.color).toBe("whitesmoke")
  });
})