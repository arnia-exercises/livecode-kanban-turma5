import { useEffect } from "react";
import { Column, Content } from "../../assets/styles/GlobalStyle";
import CreateCard from "../../components/CreateCard";
import { useCards } from "../../context/CardContext";
import { getAllCards } from "../../services/card";

export default function Kanban () {
  const { cards, setCards } = useCards()

  useEffect(() => {
    const getPage = async () => {
      try {
        const response = await getAllCards()
        setCards(response)
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      }
    }
    getPage()
  }, [setCards])

  return (
    <Content>
      <CreateCard />
      <Column>
        <h1>TODO</h1>
        <pre>{JSON.stringify(cards.filter(card => card.column === 'TODO'), null, 2)}</pre>
      </Column>
      <Column>
        <h1>DOING</h1>
        <pre>{JSON.stringify(cards.filter(card => card.column === 'DOING'), null, 2)}</pre>
      </Column>
      <Column>
        <h1>DONE</h1>
        <pre>{JSON.stringify(cards.filter(card => card.column === 'DONE'), null, 2)}</pre>
      </Column>
    </Content>
  )
}
