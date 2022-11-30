import { createContext, useContext } from 'react';
import { Children } from '~/types';

/**
 * Define which values the global context can contain.
 */
type GlobalContextProps = {
  name: string;
};

/**
 * Create context instance.
 */
export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// ====================================================================================================================

/**
 * Hook to retrieve values from GlobalContext.
 */
export function useGlobalContext() {
  const globalContext = useContext(GlobalContext);

  if (globalContext === undefined) {
    throw new Error('useGlobalContext must be used within GlobalContextProvider');
  }

  return globalContext;
}

// ====================================================================================================================

type GlobalContextProviderProps = {
  children: Children;
};

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const globalContextValues: GlobalContextProps = { name: 'emil' };

  return <GlobalContext.Provider value={globalContextValues}>{children}</GlobalContext.Provider>;
}
