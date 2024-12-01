
interface Props {
   onChange: any
}


function TimerDurationInput(props: Props) {


    return (
        <div>
        <input type="number" placeholder="Enter a time in seconds" onChange={props.onChange} />
       
     </div>
    )

}

export default TimerDurationInput;