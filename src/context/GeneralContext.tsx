import { createContext, useState } from "react";

type GeneralContext = {
  cartItems: string[];
  setCartItems: (arg: string[]) => void;
  urls: Urls[];
  setUrls: (arg: Urls[]) => void;
};

type Urls = {
  name: string;
  url: string;
  value: number;
};

export const GeneralContext = createContext<GeneralContext>(null!);

export default function GeneralProvider({ children }: { children: JSX.Element }) {
  const [cartItems, setCartItems] = useState<string[]>(
    ["Combo Makta"]
    // [] as string[]
  );
  const [urls, setUrls] = useState<Urls[]>([] as Urls[]);

  const values = {
    cartItems,
    setCartItems,
    urls,
    setUrls,
  };

  return <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>;
}
