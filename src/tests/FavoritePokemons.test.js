import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se é exibida na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha pokémons favoritos', () => {
  renderWithRouter(<App />);
  userEvent.click(screen.getByRole('link', { name: 'Favorite Pokémons' }));
  const message = screen.getByText('No favorite pokemon found');
  expect(message).toBeInTheDocument();
});

// test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
//   renderWithRouter(<FavoritePokemons pokemons={ data } isfavorite />);
//   expect(data).toBeInTheDocument();
// });
