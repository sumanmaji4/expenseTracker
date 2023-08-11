import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    // console.log(expenseData)
    props.onAddExpense(expenseData)
    closeAddNewExpense()
  }

  const [isExpenseFormOpen, ExpenseFormState] = useState('false')

  const openAddNewExpense = () => {
    ExpenseFormState('true')
  }
  const closeAddNewExpense = () => {
    ExpenseFormState('false')
  }

  if (isExpenseFormOpen === 'false') {
    return (
      <div className='new-expense'>
        <button onClick={openAddNewExpense}>Add New Expense</button>
      </div>
    )
  } else {
    return (
      <div className='new-expense'>
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stopEditing={closeAddNewExpense}
        />
      </div>
    )
  }
}

export default NewExpense
