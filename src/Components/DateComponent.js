import { useState } from 'react'

const DateComponent = () => {
  const [currentDate, setCurrentdate] = useState(null)

  const UpdateDate = () => {
    const date = new Date()
    const formattedDate = date.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    setCurrentdate(formattedDate)
  }
  useState(UpdateDate)

  return currentDate
}

export default DateComponent
