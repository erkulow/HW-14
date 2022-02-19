import React, { useState } from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'

const INIT_DATA = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2022, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2023, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2024, 5, 12),
	},
] // Это массив который будет отоброжаться по умолчанию

// этот компонент получает данные от дочерних компонентов и добовляет его в свой пропс (точнее в массив чтоб в дольнейшем сообщать браузеру что если стейт обновиться реакту нужно обновляться)
const App = () => {
	const [expenses, setExpenses] = useState(INIT_DATA) //стейт который содержит default ные значения но в дольнейшем этот стейт будет обновлять список (коротко говоря стейт который товечает за  отоброжения данных которые в массиве и которые присоеденяться в массив  )

	const NewExpensesData = (newData) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, newData]
		})
	} // функция которая получает данные из newExpenses и добовляет его в стейт (expenses) с помошью функции (setExpenses) стейта который обновляет стейт(сообщает реакт что стейт обновился) она получает данные с помошью поднятия данных(lifting up )

	return (
		<div>
			<NewExpenses newData={NewExpensesData} />{' '}
			{/*тут мы отдаем с помощью пропсов функция которая поднимает данные */}
			<Expenses items={expenses} />{' '}
			{/* тут мы отдаем стейт для дольнейшей обработки данных */}
		</div>
	)
}

export default App
