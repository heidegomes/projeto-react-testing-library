import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { Router } from 'react-router-dom';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);
  const home = screen.getByRole('link', { name: /Home/i });
  const about = screen.getByRole('link', { name: /About/i });
  const favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(favorite).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const home = screen.getByRole('link', { name: /Home/i });
  userEvent.click(home);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const about = screen.getByRole('link', { name: /About/i });
  userEvent.click(about);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/about');
});

test('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
  userEvent.click(favorite);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/favorites');
});

test('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', () => {
  const { history } = renderWithRouter(<App />);
  const titleHome = screen.getByRole('heading', { level: 1 });
  expect(titleHome).toBeInTheDocument();
  history.push('/qualquerCoisa');
  const { location: { pathname } } = history;
  expect(pathname).toBe('/qualquerCoisa');
});
