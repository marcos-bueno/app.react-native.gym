import { createContext } from 'react';
import { UserDTO } from '@dtos/userDTO';

export type AuthContextDataProps = {
  user: UserDTO;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: '1',
          name: 'Marcos',
          email: 'marcos@email.com',
          avatar: 'marcos.png',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
