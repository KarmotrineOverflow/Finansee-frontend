type CounterData = {
    label: string,
    cashTotal: Float32Array
}

export default function MoneyCounter({ label, cashTotal }: CounterData) {

    return (
        /* Display this as flex with column type */
        <div>
            <h3>{label}</h3>
            <h2>{cashTotal}</h2>
        </div>
    )
}