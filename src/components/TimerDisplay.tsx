interface Props {
    displayText: string
}


function TimerDisplay(props: Props) {


    return (
        <h1>{props.displayText}</h1>
    )

}

export default TimerDisplay;