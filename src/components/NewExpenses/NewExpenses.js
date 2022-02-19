import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
import HideExpenseForm from './HideExpenseForm'

// этот компонен делает update данных которые пришли в него от дочерних элементов
const NewExpenses = (props) => {
	const [toggle, setToggle] = useState(false)
	const SaveExpensesDataHandler = (enteredExpensesData) => {
		const expensesData = {
			...enteredExpensesData,
			id: Math.random().toString(),
		}
		// console.log(expensesData);
		props.newData(expensesData)
	} // та самая функция которая помогает получать объект от дочерних элементов , в этом случае мы получаем объект и деструктизируем его с помощью spreead оператора и добовляем в него id с помощью метода random И с помощью метода toString переобразуем его чтоб в дольнейшем не было проблем

	const ChangeStateForm = () => {
		setToggle((prev) => {
			return !prev
		})
	}
	return (
		<div className='new-expense'>
			{!toggle && (
				<ExpenseForm
					hideForm={ChangeStateForm}
					onSaveExpensesData={SaveExpensesDataHandler}
				/>
			)}
			{toggle && <HideExpenseForm showForm={ChangeStateForm} />}
		</div>
	)
}

export default NewExpenses
