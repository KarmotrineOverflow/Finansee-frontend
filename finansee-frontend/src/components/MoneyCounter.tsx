type CounterData = {
    label: string,
    cashTotal: number
}

export default function MoneyCounter({ label, cashTotal }: CounterData) {

    return (
        /* Display this as flex with column type */
        <div>
            <h3 className="font-medium text-[20px]">{label}</h3>
            <hr className="opacity-35"/>
            <h2 className="font-bold text-[24px] text-green-800">PHP {cashTotal}</h2>
        </div>
    )
}