"use client";

import React, { useState } from "react";

interface ContextProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface ProviderProps {
  children?: React.ReactNode;
}

const DocsContext = React.createContext<ContextProps>({} as ContextProps);

const DocsProvider = ({ children }: ProviderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DocsContext.Provider value={{ open, setOpen }}>
      {children}
    </DocsContext.Provider>
  );
};

const useDocs = () => React.useContext(DocsContext);

export { DocsProvider, useDocs };
