import React, { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022') // default ное значение селекта в будушем оно может меняться это зависит от выбранного option 
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
		console.log(filteredYear)
	} // метод который используется внутри компоненты expenses filter вызываеться как пропс  для получения данных

	const filteredExpenses = props.items.filter((el) => {
		return el.date.getFullYear().toString() === filteredYear
	}) // когда компонента создаеться или пересоздаеться  происходит этот код , здесь мы фильтруем основной  массив из App.js и делаем новый массив с помощью метода map 

	console.log(filteredExpenses)

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear} 
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart filteredYear={filteredYear} expenses={filteredExpenses} allExpenses={props.items} />
			<ExpensesList
				expenses={props.items}
				filteredExpenses={filteredExpenses}
				filteredYear={filteredYear}
			/>{/*тут мы даем в expenseslist сам массив фильтрованный массив и значение по которому было фильтрация чтобы корректно работать с фильтрацией  оно дает нам список карточек */}
		</Card>
		// как я ранее говорил здесь мы пользуемся card из ui
	)
}

export default Expenses
