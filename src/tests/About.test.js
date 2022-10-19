import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { Router } from 'react-router-dom';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<App />);
  userEvent.click(screen.getByRole('link', { name: 'About' }));
  const pokedex = screen.getByRole('heading', { name: /About Pokédex/i });
  expect(pokedex).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  renderWithRouter(<App />);
  userEvent.click(screen.getByRole('link', { name: 'About' }));
  const img = screen.getByAltText('Pokédex');
  const imgExpect = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  console.log(img);
  expect(img.src).toBe(imgExpect);
});
