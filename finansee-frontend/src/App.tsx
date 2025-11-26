import {
  LayoutDashboard,
  FileSpreadsheet,
  CalendarDays,
  HandCoins
} from 'lucide-react'
import Sidebar, { SidebarItems } from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"

export default function App() {

  // TODO: Design how the debt and upcoming bills systems will work
  // Questions to ponder:
  // - How to log debts? How will it integrate with the upcoming bills system?
  // - How to schedule upcoming bills? (recurring vs once vs custom dates)
  // - How to mark a debt or upcoming bill as paid? Through the tracker or in their systems?
  // - Do we automate the logging of debts and upcoming bills when entries are added or modified on their systems, or let users manually input them in the tracker?
  // - How do we handle deletion of debts/upcoming bills? They have to be able to be deleted with or without logs being written due to various circumstances

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