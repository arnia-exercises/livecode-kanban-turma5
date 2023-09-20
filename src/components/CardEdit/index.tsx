import { FormEvent, useState } from "react"
import { updateCard } from "../../services/card"
import { useCards } from "../../context/CardContext"

type Props = {
  card: Card
  closeCard: () => void
}

export default function CardEdit ({ card, closeCard }: Props) {
  const [title, setTitle] = useState(card.title)
  const [content, setContent] = useState(card.content)

  const { setCards } = useCards()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await updateCard(card._id, {
        column: card.column,
        title,
        content
      })
      setCards(response)
      closeCard()
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Título"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Conteúdo"
      />
      <button>Salvar</button>
    </form>
  )
}