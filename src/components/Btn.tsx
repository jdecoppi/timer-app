interface Props {
  btnType: string; //start, stop, or restart
  activeState: any;
  
}

function Btn(props: Props) {

  const debugInfo = () => {
    console.log(props.activeState);
    
  }



  switch (props.btnType) {
    case "start":
      return <div><button onClick={props.activeState}>Start</button></div>;
    case "stop":
      return <div><button onClick={props.activeState}>Stop</button></div>;
    case "restart":
      return <div><button onClick={debugInfo}>Restart</button></div>
    case "update":
      return <div><button onClick={debugInfo}>Update</button></div>
    default:
      return <div className=""><p>ERROR</p></div>;
  }
}

export default Btn;
