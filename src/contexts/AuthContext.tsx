import { createContext, useState } from 'react';
import { UserDTO } from '@dtos/userDTO';

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({
    id: '1',
    name: 'Marcos',
    email: 'marcos@email.com',
    avatar: 'marcos.png',
  });

  function signIn(email: string, password: string) {
    setUser({ id: '', name: '', email, avatar: '' });
  }

  function signOut() {}

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
