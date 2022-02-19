import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


// Этот компонент отвечает за корректное выведение фильтрованного массива с помошью обычного условног оператора и компонента ExpensesITEM <= (ЭТО САМА КАРТОЧКА )

const ExpensesList = ({ expenses , filteredExpenses , filteredYear }) => {
	let expensesContent = <h2 className='expenses-list__fallback'>No Expense Found</h2>// сначала в переменную мы кладем обычный jsx code поому что jsx это обычное js вырожение 
	if (filteredExpenses.length > 0) {// мы даем условие если длинна отфильтрованного массива больше нуля то тогда сделай верстку и перезапиши это все в пременную выше 
       expensesContent = filteredExpenses.map((element) => {
            return (
                <ExpenseItem
                    key={Math.random()}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />// компонент который делает карточки из массива  все происходит с помошью метода map()
            )
        })
	}
    if(filteredYear == 'all' && expenses.length > 0){ // а тут мы даем условие если значение select === "all" и длинна самого массива больше 0 то есть если в нем что то есть) то выведи нам все что есть в массиве(и сохрани этот код в переменной expensesContent (перезапиши))
       expensesContent = expenses.map((element) => {
            return (
                <ExpenseItem
                    key={Math.random()}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />
            )
        })
    }

    // а если наши условиия не выполняться в наш expenses list попадеть default ное значение expensesContent
	return (
		<ul className='expenses-list'>
            {expensesContent} 
		</ul>
	)// тут наш код выводитьсяс
}

export default ExpensesList
