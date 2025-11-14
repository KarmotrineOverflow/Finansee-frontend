import testData from '../../schemas/money_tracker_schema_TEST.json'

let testMode = true

export function retrieveMonthTracker(user: string, month: number, year: number): Object {

    const monthYearStr = `${month}-${year}`
    
    let trackerData: Object = {}

    // Retrieve data from DB using identifiers (yet TBD)
    if (testMode) {

        for (const entry of testData.Items) {
            
            if (monthYearStr === entry.MonthYear && user === entry.User) {

                trackerData = entry
                break
            }
        };
    }

    return trackerData
}