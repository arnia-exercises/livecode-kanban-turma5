import { Column } from "../../assets/styles/GlobalStyle"
import { useCards } from "../../context/CardContext"
import Card from "../Card"

type Props = {
  type: Column
  title: string
}

export default function Cards ({ type, title }: Props) {
  const { cards } = useCards()

  return (
    <Column>
      <h1>{title}</h1>

      {cards.filter(card => card.column === type).map(card => (
        <Card key={card._id} card={card} />
      ))}

    </Column>
  )
}
