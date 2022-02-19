import React from 'react'

const HideExpenseForm = (props) => {
	return (
		<div>
			<button onClick={props.showForm}>Add New Expense</button>
		</div>
	)
}

export default HideExpenseForm
