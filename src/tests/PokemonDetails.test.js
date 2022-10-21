import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import data from '../data';
import App from '../App';

const pokemon = data[0];
const rotaPikachu = '/pokemons/25';

test('É exibido na tela um h2 com o texto <name> Details', () => {
  const { history } = renderWithRouter(<App />);
  const details = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(details);
  const { pathname } = history.location;
  expect(pathname).toBe(rotaPikachu);
  const title = screen.getByRole('heading', { name: /Pikachu Details/i });
  expect(title).toBeInTheDocument();
});

test('É exibido na tela um h2 com o texto Summary', () => {
  const { history } = renderWithRouter(<App />);
  const details = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(details);
  const { pathname } = history.location;
  expect(pathname).toBe(rotaPikachu);
  const titleSummary = screen.getByRole('heading', { name: /summary/i });
  const summary = screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);
  expect(titleSummary).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
});

test('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
  const { history } = renderWithRouter(<App />);
  const details = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(details);
  const { pathname } = history.location;
  expect(pathname).toBe(rotaPikachu);
  const game = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
  expect(game).toBeInTheDocument();
});

test('São exibidas na tela imagens de localização com o src correto', () => {
  const { history } = renderWithRouter(<App />);
  const details = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(details);
  const { pathname } = history.location;
  expect(pathname).toBe(rotaPikachu);
  const images = screen.queryAllByAltText(/Pikachu location/i);
  expect(images[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(images[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
});

test('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
  const { history } = renderWithRouter(<App />);
  const details = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(details);
  const { pathname } = history.location;
  expect(pathname).toBe(rotaPikachu);
  const label = screen.getByLabelText(/Pokémon favoritado?/i);
  expect(label).toBeInTheDocument();
});
