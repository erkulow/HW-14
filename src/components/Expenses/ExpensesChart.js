import React from 'react'
import Chart from '../Chart/Chart'

// этот компонент создает массив с названиями месяцев(колонок с значениями которые в дольнейшем будуь рости)

const ExpensesChart = (props) => {
	const chartDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 },
	] 

	// тут мы проверяем если значение селекта ровно 'all' то тогда пройдись по массиву с объектами полученных из родительской компоненты в нашем случае это актуальное состояние массива в котором данные из inputFORM и получи месяц объекта с помощью метода getMonth(оно возврошвет число месяца и оно начинаеться с 0 === январь) и дальше мы берем массив с месяцами и оброщаемся к обьектам с помошью индекса (в этот момент к нам прихлдит на помошь квадратные скобки и полученный месяц getMonth()) и дальше мы оброщаемься к value этого объекта и плюсуем amount из внешнего объеекта 

	if (props.filteredYear === 'all') {
		for (const expense of props.allExpenses) {
			const expenseMonth = expense.date.getMonth() // starting at 0 january => 0
			chartDataPoints[expenseMonth].value += expense.amount
		}
	}else if (props.filteredYear !== 'all') { 
		// а если наше первое условие не выполнелось выполняеться else оно делает все то же самое но оно проходиться не по общему массиву а только по фильрованному массиву 
		for (const expense of props.expenses) {
			const expenseMonth = expense.date.getMonth() // starting at 0 january => 0
			chartDataPoints[expenseMonth].value += expense.amount
		}
	}

	return <Chart dataPoints={chartDataPoints} /> // сюда мы даем массив состояших из месяцев и количеством потраченных денег в месяц 
}

export default ExpensesChart
