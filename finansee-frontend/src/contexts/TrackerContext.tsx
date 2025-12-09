import { createContext } from 'react'
import type { MonthlyReport } from '../types/TypeDefs'

export const initialMonthlyReport: MonthlyReport = {
    Username: "",
    MonthYear: "",
    StartingMoney: 0,
    CurrentMoney: 0,
    MoneyAllocation: {
        Savings: 0,
        PocketMoney: 0,
        EmergencyFund: 0
    },
    MonthSheet: {
        Income: [],
        Expense: [],
        Debt: [],
        MonthlyDue: []
    }
}

export const trackerContext = createContext(initialMonthlyReport)