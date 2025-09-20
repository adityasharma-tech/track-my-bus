import { createContext, useContext } from 'react';

interface MetaData {
  block: 'K' | 'D' | 'H' | 'F';
}

interface User {
  identifier: `+91${number}`;
  name: `${string} ${string}`;
  metadata: MetaData;
}

interface Auth {
  user?: User;
}

const AuthContext = createContext<Auth | null>(null);

const AuthProvider = (props: React.PropsWithChildren) => {
  const user: User = {
    identifier: '+911234567890',
    name: 'Jane Doe',
    metadata: {
      block: 'K',
    },
  };
  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('It seems you forgot to wrap your app with AuthContext!');

  return context;
};

export { AuthProvider, useAuth };
