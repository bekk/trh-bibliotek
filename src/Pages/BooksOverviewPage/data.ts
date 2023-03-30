import { BookDTO } from '~/DTO';

const mockedBook: BookDTO = {
  id: 'id',
  title: 'Title',
  authors: 'Donald Duck',
  publisher: 'Onkel Skrue',
  ISBN: 'ISBN1234',
  year: 2023,
  antall: 4,
  Låntetakere: ['Olde', 'Dole', 'Doffen'],
};
export const mockedBooks = Array(10).fill(mockedBook);
