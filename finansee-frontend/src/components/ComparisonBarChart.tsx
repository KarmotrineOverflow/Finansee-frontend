import Chart from 'chart.js/auto'

export default function ComparisonBarChart(reports: Object[]) {

    // Need a chart lib here to give visualization to the received data
    // A bar chart will display up to the last 4 months (if data is present) of total money to show difference
    /* 
        ReportData prop entries contains
        - Month
        - Total Money
    */

    // FIXME: Make the mapping work
    const monthData = reports.map(row => row.month)

    new Chart(
        document.getElementById('previous-month-comparison'),
        {
            type: "bar",
            data: {
                reportData
            }
        }
    )


    return (

        <div>
            <p>Previous Month Comparison</p>
            <canvas id="previous-month-comparison" />            
        </div>
    )
}