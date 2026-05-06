import { createContext, useContext, useState, type ReactNode } from 'react';

interface AfspraakContextType {
  isOpen: boolean;
  open: (service?: string) => void;
  close: () => void;
  initialService: string;
}

const AfspraakContext = createContext<AfspraakContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
  initialService: '',
});

export const useAfspraak = () => useContext(AfspraakContext);

export const AfspraakProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialService, setInitialService] = useState('');

  return (
    <AfspraakContext.Provider
      value={{
        isOpen,
        open: (service = '') => {
          setInitialService(service);
          setIsOpen(true);
        },
        close: () => setIsOpen(false),
        initialService,
      }}
    >
      {children}
    </AfspraakContext.Provider>
  );
};
