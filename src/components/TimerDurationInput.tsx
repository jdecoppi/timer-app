
interface Props {
    updateTimer: any;
}


function TimerDurationInput(props: Props) {


    return (
        <div>
        <input type="text" placeholder="Enter a time in seconds" onInput={props.updateTimer} />
     </div>
    )

}

export default TimerDurationInput;