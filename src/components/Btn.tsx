interface Props {
  btnType: string; //start, stop, or restart
  onClick: any;
  
}

function Btn(props: Props) {

  // const debugInfo = () => {
  //   console.log(props.onClick);
    
  // }


// bad practice, should instead pass a prop that is the button display

  switch (props.btnType) {
    case "start":
      return <div><button style={{margin: "30px"}} onClick={props.onClick}>Start</button></div>;
    case "stop":
      return <div><button style={{margin: "30px"}} onClick={props.onClick}>Stop</button></div>;
    case "restart":
      return <div><button style={{margin: "30px"}} onClick={props.onClick}>Restart</button></div>
    case "update":
      return <div><button style={{margin: "30px"}} onClick={props.onClick}>New Timer</button></div>
    default:
      return <div className=""><p>ERROR</p></div>;
  }
}

export default Btn;
