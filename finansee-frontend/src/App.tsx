import { createContext, useState } from 'react'
import {
  LayoutDashboard,
  FileSpreadsheet,
  CalendarDays,
  HandCoins
} from 'lucide-react'
import Sidebar, { SidebarItems } from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"

import type { 
  MonthlyReport, 
  MoneyAllocation, 
  ReportSheet,
  Income,
  Expense,
  Debt,
  MonthlyDue
} from './types/TypeDefs'

export default function App() {

  // TODO: Design how the debt and upcoming bills systems will work
  // Questions to ponder:
  // - How to log debts? How will it integrate with the upcoming bills system?
  // - How to schedule upcoming bills? (recurring vs once vs custom dates)
  // - How to mark a debt or upcoming bill as paid? Through the tracker or in their systems?
  // - Do we automate the logging of debts and upcoming bills when entries are added or modified on their systems, or let users manually input them in the tracker?
  // - How do we handle deletion of debts/upcoming bills? They have to be able to be deleted with or without logs being written due to various circumstances

  const [monthlyReport, setMonthlyReport] = useState<MonthlyReport>(fetchMonthlyReport())

  // If no date is provided, fetches the report for current month
  const fetchMonthlyReport = (monthYearStr?: string): MonthlyReport => {

    const testMode = true
    const date = new Date()
    const dateReportToFetch = monthYearStr ?? `${date.getMonth}-${date.getFullYear}`

    let retrievedReport: any = undefined

    if (testMode) {

      // Fetch existing report for current month
      // If no existing report for current month
        // Fetch final money count and money alllocation from last month and create new report
        // If no existing reports at all
          // Create new report with zero values

      try {

        // Might be better to test this in a containerized env to incorporate DB usage

        fetch(`/test_data/${dateReportToFetch}`)
          .then(data => data.json())
          .then(json => { retrievedReport = json as MonthlyReport })
          .catch()
          
      } catch (e) {


      }
    }
  }

  return (
    <main className="flex flex-row w-full">
      {/* <header className="flex-row w-full p-4 bg-amber-300">
        <h1 className="text-green-800">Finansee</h1>
      </header> */}

      <Sidebar>
        <SidebarItems icon={<LayoutDashboard color="white" strokeWidth={1} />} label="Dashboard" active={true}  />
        <SidebarItems icon={<FileSpreadsheet color="white" strokeWidth={1} />} label="Tracker" active={false}  />
        <SidebarItems icon={<CalendarDays color="white" strokeWidth={1} />} label="Monthly Budget" active={false}  />
        <SidebarItems icon={<HandCoins color="white" strokeWidth={1} />} label="Debts" active={false}  />
      </Sidebar>

      <Dashboard firstName="Elfie" lastName="Campit" />
    </main>    
  )
}

function createNewMonthlyReport(previousReport?: MonthlyReport): MonthlyReport {

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