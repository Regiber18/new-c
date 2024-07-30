import Field from "../molecules/Field"
import Swal from "sweetalert2"
import Button from "../atoms/Button"
import Style from "./ForminStudent.module.css"
import { useState } from "react";
import Data from "../../data/Data"

function Questionarie() {
     
    const [nombre, setName] = useState('')
    const [grado, setGrade] = useState('');
    const [grupo, setGrupo] = useState("")

    const handlerClick = () => {
        if(!nombre || !grado  || !grupo || grupo < 0 || grado < 0) {
            Swal.fire({
                title: "Alta de alumnos",
                icon: "error",
                text: `Error al regiistar alumno`,
              });
        }else {
          Data.addAlumns(nombre, grado, grupo)
          setName("")
          setGrade("")
          setGrupo('')
        Swal.fire({
                title: "Alta de alumnos",
                icon: "success",
                text: `Nombre: ${nombre}  grado: ${grado}   grupo: ${grupo}`,
          });  
        }  
    }
   
    return(
        <>
        <div id={Style.login_section}>
            <div>
                <h2 id={Style.title}>Resgistro  de alumno</h2>
            </div>
            <div id={Style.cal_field}>
                <Field type="text" placeholder="Nombre" text="Nombre" val={nombre} fnVal={setName}/>
                <Field type="number" placeholder="Grado" text="grado" val={grado} fnVal={setGrade}/> 
                <Field type="number" placeholder="Grupo"text="grupo" val={grupo} fnVal={setGrupo} /> 
            </div>
            <div id={Style.cal_button}>
                <Button title={"Agregar registro"} onClick={handlerClick} />
            </div>
        </div>
     </>
    )
}

export default Questionarie; 
