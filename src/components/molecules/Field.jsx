import Input from "../atoms/Input"
import Label from  "../atoms/Label"
import Style from "./Field.module.css"

function Field(props) {
    return(
    <>
    <div  style= {{width:"80%"}}>
        <div id={Style.cal_label}> 
          <Label text={props.text}></Label>
        </div>
        <div>
            <Input pattern={props.pattern} val={props.val} fnVal={props.fnVal} type={props.type}  placeholder={props.placeholder}></Input>
        </div>
    </div>
    </> 
    )
}

export default Field; 