import React from 'react'

interface IDatePickerProps {
  title: string
}

const DatePicker: React.FC<IDatePickerProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>Calendar</div>
    </>
  )
}

export default DatePicker
