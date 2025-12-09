import type { MonthlyReport, MoneyAllocation, ReportSheet } from "../../types/TypeDefs"
import { initialMonthlyReport } from "../../contexts/TrackerContext"

// If no date is provided, fetches the report for current month
export function fetchMonthlyReport(monthYearStr?: string): MonthlyReport {

    const testMode = true

    const date = new Date()
    const dateReportToFetch = monthYearStr ?? `${date.getMonth}-${date.getFullYear}`

    let retrievedReport: MonthlyReport = initialMonthlyReport

    if (testMode) {

        // Fetch existing report for current month
        // If no existing report for current month
            // Fetch final money count and money alllocation from last report sheet and create new report            
        // If no existing reports at all ()
            // Create new report with zero values

        // Might be better to test this in a containerized env to incorporate DB usage
        // Create test data for now, then switch to containerized env when creating backend

        fetch(`/test_data/${dateReportToFetch}-Report.json`)
            .then(data => data.json())
            .then(json => { retrievedReport = json as MonthlyReport })
            .catch(err => {
                console.log(`Error fetching report: ${err}\nCreating new report..`)
                retrievedReport = createNewMonthlyReport()
            })                   
    }

    return retrievedReport
}

// Takes in an older report and creates a new report for the month, adopting values from the provided
// report for continuation.
// If no previous report is provided, creates a new report for the current month
export function createNewMonthlyReport(previousReport?: MonthlyReport): MonthlyReport {

  const date = new Date()
  const currentMonth = date.getMonth()
  const currentYear = date.getFullYear()

  const newReport: MonthlyReport = {
    Username: previousReport?.Username ?? "Elfie",
    MonthYear: `${currentMonth}-${currentYear}`,
    StartingMoney: previousReport?.StartingMoney ?? 0,
    CurrentMoney: previousReport?.CurrentMoney ?? 0,
    MoneyAllocation: previousReport?.MoneyAllocation ?? {

      Savings: 0,
      PocketMoney: 0,
      EmergencyFund: 0
    } as MoneyAllocation,
    MonthSheet: {

      Income: previousReport?.MonthSheet.Income ?? [],
      Expense: previousReport?.MonthSheet.Expense ?? [],
      Debt: previousReport?.MonthSheet.Debt ?? [],
      MonthlyDue: previousReport?.MonthSheet.MonthlyDue ?? []
    } as ReportSheet
  } as MonthlyReport

  return newReport
}