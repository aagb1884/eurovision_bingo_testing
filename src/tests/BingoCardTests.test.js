import {render, fireEvent, getByTestId} from '@testing-library/react';
import React from 'react';
import BingoCard from '../Components/BingoCard';
import { handleGetNewCards } from '../Components/BingoCard';

describe("BingoCard", () => {
  let container;

  beforeEach(() => {
    container = render(< BingoCard />);
  });

  const EurovisionClicheArray = [
    'ciabatta smelling hipster\'s folksy simpering',
    'power ballad delivered by woman nailed to the floor',
    'nul points',
    'graham norton gives up',
    'graham norton is genuinely surprised',
    'graham norton mentions the staging',
    'KEY CHANGE',
    'this song\'s message is simply that the singer is incredibly horny',
    'gratuitous wind machine',
    'weird-shaped piano',
    'the hosts\' banter makes everyone clench']

  it('calls a function on the button click', () => {
    const newCards = handleGetNewCards(EurovisionClicheArray);
    expect(newCards).toHaveLength(6);
  });

})
