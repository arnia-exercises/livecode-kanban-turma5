import { BoxModal } from "../../assets/styles/GlobalStyle"

type Props = {
  closeModal: () => void
  confirmModal: () => void
}

export default function Modal ({ closeModal, confirmModal }: Props) {
  return (
    <BoxModal>
      <header>
        <button onClick={closeModal}>Fechar</button>
      </header>

      <h3>Você tem certeza que deseja excluir a tarefa?</h3>

      <button onClick={closeModal} >Cancelar</button>

      <button onClick={confirmModal}>Excluir</button>
      
    </BoxModal>
  )
}