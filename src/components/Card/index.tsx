import { useState } from "react";
import { Box } from "../../assets/styles/GlobalStyle";
import CardEdit from "../CardEdit";
import Modal from "../Modal";
import { deleteCard } from "../../services/card";
import { useCards } from "../../context/CardContext";

type Props = {
  card: Card
}

export default function Card ({ card }: Props) {
  const [showEdit, setShowEdit] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const { setCards } = useCards()

  const closeCard = () => {
    setShowEdit(false)
  }
  
  const openCard = () => {
    setShowEdit(true)
  }
  
  const closeModal = () => {
    setShowModal(false)
  }
  
  const openModal = () => {
    setShowModal(true)
  }

  const confirmModal = async () => {
    try {
      const response = await deleteCard(card._id)
      setCards(response)
      closeModal()
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message)
      }
    }
  }

  return (
    <Box>
      {showModal === true && <Modal closeModal={closeModal} confirmModal={confirmModal} />}

      {showEdit === true
        ? <button onClick={closeCard}>Cancelar</button>
        : <button onClick={openCard}>Editar</button>
      }
      {showEdit === true
        ? <CardEdit card={card} closeCard={closeCard} />
        : (
          <>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <button>esquerda</button>
            <button onClick={openModal}>excluir</button>
            <button>direita</button>
          </>
        )
      }
    </Box>
  )
}