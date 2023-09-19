import { FormEvent, useEffect, useState } from "react"
import { Column } from "../../assets/styles/GlobalStyle"
import { createCard } from "../../services/card"
import { useCards } from "../../context/CardContext"

export default function CreateCard () {
  const { setCards } = useCards()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // COLOCAR ISSO NUM HEADER
  const [name, setName] = useState('')
  useEffect(() => {
    setName(localStorage.getItem('name') ?? '')
  }, [])


  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    try {
      const response = await createCard({ title, content })
      setCards(response)
      setTitle('')
      setContent('')
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message)
      }
    }
  }

  return (
    <Column>

      <h2>{name}</h2>


      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" id="title" onChange={e => setTitle(e.target.value)} value={title} />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <br />
          <textarea id="content" onChange={e => setContent(e.target.value)} value={content} />
        </div>
        <button type="submit">Criar</button>
      </form>
    </Column>
  )
}