import React from 'react'
import './ExpensesFilter.css'

// этот компонент возврощает значение по которым мы будем фильтровать в дальнейшем список
const ExpensesFilter = (props) => {
	const selectChangeHandler = (e) => {
		props.onChangeFilter(e.target.value)
	} // тут мы берем значение из select и с помошьью функции из пропсов мы отдаем данные родителю (lifting up) , мы еще даем в значение  стейт из родительского элемента чтобы сделать to way data binding

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={props.selected} onChange={selectChangeHandler}>
					<option value='2025'>2025</option>
					<option value='2024'>2024</option>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='all'>select all</option>
				</select>
			</div>
		</div>
	)
}

export default ExpensesFilter
