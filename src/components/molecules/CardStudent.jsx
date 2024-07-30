import Label from "../atoms/Label";
import Card from "../atoms/Card"

function SectionStudent(props) {
    return(
        <>
           <Card>
              <Label text={props.nombre}></Label>
              <Label text={props.grado}></Label>
              <Label text={props.group}></Label>
           </Card>         
        </>
    )
}

export default SectionStudent;