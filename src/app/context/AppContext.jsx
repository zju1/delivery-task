const { createContext } = require('react');

export const AppContext = createContext();

export function AppProvider({ children }) {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
}
