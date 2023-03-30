import { UserDTO } from '~/DTO';

const mockedUser: UserDTO = {
  id: 'id',
  Name: 'Mikke Mus',
};
export const mockedUsers: UserDTO[] = Array(10).fill(mockedUser);
