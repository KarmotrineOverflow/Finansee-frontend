type WidgetProps = {

    content: React.ComponentType<any>
}

export default function WidgetContainer({ content }: WidgetProps) {

    return (
        
        <>
            {content}
        </>
    )
}