import { useEffect } from "react";
import { Column, Content } from "../../assets/styles/GlobalStyle";
import CreateCard from "../../components/CreateCard";
import { useCards } from "../../context/CardContext";
import { getAllCards } from "../../services/card";
import Cards from "../../components/Cards";

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

      <Cards title="TO DO" type="TODO" />
      <Cards title="DOING" type="DOING" />
      <Cards title="DONE" type="DONE" />
    </Content>
  )
}
