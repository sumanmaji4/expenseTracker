import './Expenses.css'

import Card from '../UI/Card'
import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const getSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear)
    // console.log(filteredYear)
  }

  function yearFilter(oneItem) {
    return oneItem.date.getFullYear().toString() === filteredYear
  }

  const filterExpenses = props.items.filter(yearFilter)
  // console.log(filterExpenses)

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} sendYear={getSelectedYear} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
