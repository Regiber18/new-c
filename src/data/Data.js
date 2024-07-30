import Swal from "sweetalert2";

let alumns = []

function addAlumns(nombre, grado, group) {
    alumns.push({name: nombre, grade: grado, group: group})

    return true;
}

const searchAlumn = (alumn) => {
    let i=0;
    let flag = false; 
    while(i < alumns.length) {
        if(alumns[i] === alumn) {
            flag = true; 
        }
    }

    if(!flag) {
        Swal.fire({
            title: "Encontrar",

            text: "No se logro encontrar",

            icon: "error"
        })
    }else {
        console.log("ok");
    }
}

const isEmpty = () => {
    if(alumns.length === 0) {
        Swal.fire({
            title: "Está vacio",

            text: "no hay alumnos",

            icon: "info"
        })
    }
}



const getAlumns = () => {
    return alumns;
}

export default {addAlumns, getAlumns, searchAlumn, isEmpty}

