import { useEffect, useState } from 'react';
import { getUsers } from '~/api';
import { Page } from '~/Components';
import { UserDTO } from '~/DTO';
import { mockedUsers } from '~/Pages/UserOverviewPage/data';

export function UserOverviewPage() {
  const [users, setUsers] = useState<UserDTO[]>(mockedUsers);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <Page>
      <h1>Brukere:</h1>
      {users.length}

      {users.map((user, i) => (
        <div key={i}>{user.Name}</div>
      ))}
    </Page>
  );
}
