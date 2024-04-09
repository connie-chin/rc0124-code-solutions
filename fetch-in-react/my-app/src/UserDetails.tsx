/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import type { User } from './Users';

type Props = {
  userId: number;
  onCancel: () => void;
};
export function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchUser(userId: number): Promise<void> {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error(`fetch error ${response.status}`);
        }
        const user = await response.json(); //diff user than one in state variable
        setUser(user); //displays proper user info
      } catch (error) {
        setError(error);
      } finally {
        //works without finally too
        setIsLoading(false);
      }
    }
    if (userId) fetchUser(userId); //if there is a userId, call the function. if no userId, dont call the function
  }, [userId]); //everytime user info is updated (from a click), this useEffect runs again

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
