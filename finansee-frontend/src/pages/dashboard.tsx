type UserDetails = {
    firstName: string,
    lastName: String,
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function Dashboard({ firstName, lastName }: UserDetails) {

    // TODO: Inspect the month first before pulling data
    // Create MoneyCounter component for start and current net worth

    const date = new Date()
    const currentTime = date.getHours()
    const currentMonth = date.getMonth()

    const Greeting = (): string => {

        let prefix: string
        
        if (currentTime >= 6 && currentTime <= 11) {

            prefix = "Good morning"
        } else if (currentTime >= 12 && currentTime <= 16) {

            prefix = "Good afternoon"
        } else {

            prefix = "Good evening"
        }

        return `${prefix}, ${firstName}!`
    }

    return (

        <main>
            <h2>{Greeting()}</h2>
            <p>Your financial standing for the month of {MONTHS[currentMonth]}</p>
            
        </main>
    )
}