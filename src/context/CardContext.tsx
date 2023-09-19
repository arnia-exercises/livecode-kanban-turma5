import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type CardContextProps = {
  cards: Cards
  setCards: Dispatch<SetStateAction<Cards>>
}
const CardContext = createContext<CardContextProps>({
  cards: [],
  setCards: () => []
})


type CardProviderProps = {
  children: ReactNode
}

export const CardProvider = ({ children }: CardProviderProps) => {
  const [cards, setCards] = useState<Cards>([])

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCards = () => {
  return useContext(CardContext)
}
