type Column = 'TODO'|'DOING'|'DONE'

type Card = {
  _id: string
  title: string
  content: string
  column: Column
}

type Cards = Card[]

type CreateCard = {
  title: string
  content: string
}

type UpdateCard = Omit<Card, '_id'>
