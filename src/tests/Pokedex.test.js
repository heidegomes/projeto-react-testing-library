import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const title = screen.getByRole('heading', { name: /Encountered pokémons/i });
  expect(title).toBeInTheDocument();
});

test('Os botões de filtragem por tipo possuem o nome correto', () => {
  renderWithRouter(<App />);
  const All = screen.getByRole('button', { name: 'All' });
  expect(All).toBeInTheDocument();
  const Electric = screen.getByRole('button', { name: 'Electric' });
  expect(Electric).toBeInTheDocument();
  const Fire = screen.getByRole('button', { name: 'Fire' });
  expect(Fire).toBeInTheDocument();
  const Bug = screen.getByRole('button', { name: 'Bug' });
  expect(Bug).toBeInTheDocument();
  const Poison = screen.getByRole('button', { name: 'Poison' });
  expect(Poison).toBeInTheDocument();
  const Psychic = screen.getByRole('button', { name: 'Psychic' });
  expect(Psychic).toBeInTheDocument();
  const Normal = screen.getByRole('button', { name: 'Normal' });
  expect(Normal).toBeInTheDocument();
  const Dragon = screen.getByRole('button', { name: 'Dragon' });
  expect(Dragon).toBeInTheDocument();
});

test('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
  renderWithRouter(<App />);
  const dataTestId = 'pokemon-type-button';
  const buttonsId = screen.getAllByTestId(dataTestId);
  expect(buttonsId.length).toBe(7);
});

test('É possível clicar no botão de filtragem All', () => {
  renderWithRouter(<App />);
  const All = screen.getByRole('button', { name: 'All' });
  userEvent.click(All);
  const pokemon = screen.getByText('Pikachu');
  expect(pokemon).toBeInTheDocument();
});
