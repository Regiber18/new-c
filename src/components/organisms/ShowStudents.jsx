import Style from "./ShowStudents.module.css"
import { useState } from "react";
import Data from "../../data/Data"
import Button from "../atoms/Button";
import CardStudent from "../molecules/CardStudent";

function ShowAlumns() {
    const [newAlumn, setNewAlumn] = useState([])  
    let newAlumns = []
    
    const showAlumn = () => {
        
        let alumns = Data.getAlumns();
        for(let i=alumns.length-1;i>=0;i--) {
          let auxAlumn = alumns[i];
          newAlumns.push(
            <CardStudent key={i}
              nombre={auxAlumn.name}  
              grado={auxAlumn.grade}
              group={auxAlumn.group}
            ></CardStudent>
          )
        } 
        console.log(newAlumns)
        setNewAlumn(newAlumns) 
      }  
      

    return(
    
     <div id={Style.cal_section}>
      <div>
        <h3 id={Style.title}>Registro de alumnos</h3>
      </div>
      <div id={Style.student}>
         {newAlumn}
      </div>
       <Button title={"mostrar alumnos"} onClick={showAlumn}/> 
    </div>
    )
}  

export default ShowAlumns; 