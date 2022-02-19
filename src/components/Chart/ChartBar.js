import './ChartBar.css'
import React from 'react'

// этот компонент берет данные из родительского компонента chart (maxvalue,value,label) для того чтобы вычитать процент и вырисовать этоу процентное соотнощение на диограмме , получаеться при каждом взове этой компоненты происходит отрисвка одной диограммы 

const ChartBar = (props) => {
	let barFillHeight = '0%'
	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
	}
	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div
					className='chart-bar__fill'
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className='chart-bar__label'>{props.label}</div>
		</div>
	)
}

export default ChartBar
