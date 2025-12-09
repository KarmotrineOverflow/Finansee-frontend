import ComparisonBarChart from '../components/ComparisonBarChart'
import MoneyAllocationChart from '../components/MoneyAllocationChart'
import MoneyCounter from '../components/MoneyCounter'
import MONTHS from '../config/months.json'

type UserDetails = {
    firstName: string,
    lastName: String,
}

export default function Dashboard({ firstName, lastName }: UserDetails) {

    // TODO: Inspect the month first before pulling data (why??)
    // Create MoneyCounter component for start and current net worth

    const date = new Date()
    const currentTime = date.getHours()
    const currentMonth = date.getMonth()
    
    const greetingStr = createGreetStr(currentTime, firstName)

    return (

        <section className="flex flex-row h-screen w-full p-4">
            <div className="flex flex-col w-full gap-5 text-center">
                <div className="flex flex-col gap-4 w-full">
                    <h2 className="font-medium text-[24px]">{greetingStr}</h2>
                    <p className="font-light">Your financial standing for the month of <b className='text-[20px] text-green-800'><u>{MONTHS.months[currentMonth]}</u></b></p>                                
                </div>

                <div className='flex flex-row justify-around'>
                    <MoneyCounter label={"Starting Money"} cashTotal={parseFloat("300.77")} />
                    <MoneyCounter label={"Current Money"} cashTotal={parseFloat("670.77")} />
                </div>

                <div className='w-full h-screen bg-amber-300'>                    
                </div>
            </div>            
        </section>
    )
}

function createGreetStr(currentTime: number, userName: string): string {

    let prefix: string
        
        if (currentTime >= 6 && currentTime <= 11) {

            prefix = "Good morning"
        } else if (currentTime >= 12 && currentTime <= 16) {

            prefix = "Good afternoon"
        } else {

            prefix = "Good evening"
        }

        return `${prefix}, ${userName}!`
}