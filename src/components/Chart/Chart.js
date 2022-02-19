import './Chart.css'
import ChartBar from './ChartBar'
// этот компонент получает массив и рендерит все 12 диограмм
const Chart = (props) => {
	const dataPointsValues = props.dataPoints.map((data) => data.value)
	// dataPointsValues получает масств с объектами из chart и получает все values

	const totalMath = Math.max(...dataPointsValues) // math max находит максимальное число из массива dataPoints

	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => {
				return(
                    <ChartBar 
                 key={dataPoint.label}
                 value={dataPoint.value}
                 maxValue={totalMath}
                 label={dataPoint.label}
                />
                )
			})}
		</div>
	)
	// з
}

export default Chart
