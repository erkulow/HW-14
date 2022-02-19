import { useState } from 'react'
import './ExpenseForm.css'

// грубо говоря , этот компонент служит для сборки данных от userа и создания объекта из данных которые были собраны

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('') // state для изменения value input , (для получения данных с помощью to way data binding)
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const titleChangeHandler = (event) => {
		// function для получения тайтла из инпута
		setTitle(event.target.value) // function для добовления полученнного тайтла в state
	}

	const amountChangeHandler = (event) => {
		// function для получениия количестоа (или цены)
		setAmount(event.target.value) // function для добовления полученнной цены
	}

	const dateChangeHandler = (event) => {
		// function для получения даты из input date
		setDate(event.target.value) // function для добовления полученной даты
	}

	const submitHandler = (event) => {
		// function для submit (когда происходит сабмит все состояния Input внутри формы собираються в объект и происходит поднятия состояния )
		event.preventDefault()
		const expensesData = {
			title: title,
			amount: Number(amount),
			date: new Date(date),
		}
		// console.log(expensesData);
		props.onSaveExpensesData(expensesData) // это функция которая взято из пропсов служит для поднятия данных материнский компонент
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						value={title}
						onChange={titleChangeHandler}
						size={10}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						name='amount'
						type='number'
						min='0.1'
						step='1'
						value={amount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='date '
						type='date'
						min='2022-01-01'
						value={date}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button onClick={props.hideForm}>cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
