import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import data from '../data';
import { Pokemon } from '../components';

const pokemon = data[0];
const pokemonAlt = /Pikachu sprite/i;
const favoriteAlt = /Pikachu is marked as favorite/i;
const isFavorite = true;

test('A imagem do pokemon possui o src correto', () => {
  renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);
  const img = screen.getByAltText(pokemonAlt);
  const imgExpect = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
  expect(img.src).toBe(imgExpect);
});
test('A imagem do pokemon possui o alt <name> sprite', () => {
  renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);
  const img = screen.getByAltText(pokemonAlt);
  expect(img).toBeInTheDocument();
});
test('A imagem de favorito ⭐ possui o src /star-icon.svg', () => {
  renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ isFavorite } />);
  const img = screen.getByAltText(favoriteAlt);
  const src = '/star-icon.svg';
  expect(img.src).toEqual(expect.stringContaining(src));
});
test('A imagem de favorito ⭐ possui o alt <name> is marked as favorite', () => {
  renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ isFavorite } />);
  const img = screen.getByAltText(favoriteAlt);
  expect(img).toBeInTheDocument();
});
test('É exibido na tela um texto com o tipo do pokemon', () => {
  renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite={ isFavorite } />);
  const type = screen.getByTestId('pokemon-type', { text: 'Electric' });
  expect(type.innerHTML).toBe('Electric');
});
test('Teste se a aplicação é redirecionada para a página Pokemon Details, na URL `/pokemons/<id>` ao clicar no link `More Details`', () => {
  const { history } = renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);
  const moreDetails = screen.getByRole('link', { name: /More details/i });
  userEvent.click(moreDetails);
  const { pathname } = history.location;
  expect(pathname).toBe('/pokemons/25');
});
