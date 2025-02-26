import { createContext, useContext, useState, ReactNode } from 'react';

interface DivisionContextType {
  selectedDivision: string;
  setSelectedDivision: (division: string) => void;
}

const DivisionContext = createContext<DivisionContextType | undefined>(undefined);

export function DivisionProvider({ children }: { children: ReactNode }) {
  const [selectedDivision, setSelectedDivision] = useState('Dhaka');

  return (
    <DivisionContext.Provider value={{ selectedDivision, setSelectedDivision }}>
      {children}
    </DivisionContext.Provider>
  );
}

export function useDivision() {
  const context = useContext(DivisionContext);
  if (context === undefined) {
    throw new Error('useDivision must be used within a DivisionProvider');
  }
  return context;
} 