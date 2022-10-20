import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

test('Teste se a página contém um heading h2 com o texto `Page requested not found`', () => {
  renderWithRouter(<NotFound />);
  const msgNotFound = screen.getByRole('heading', { level: 2, name: /Page requested not found/i });
  expect(msgNotFound).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  renderWithRouter(<NotFound />);
  const imgNotFound = screen.getByAltText('Pikachu crying because the page requested was not found');
  const imgExpect = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  expect(imgNotFound.src).toBe(imgExpect);
});
