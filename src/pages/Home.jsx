import Formin from "../components/organisms/ForminStudent"
import Style from  "./Home.module.css"
import ShowStudents from "../components/organisms/ShowStudents"
function Pages() {

    return(
        <div id={Style.register_home}>
            <section id={Style.register}>
             <Formin></Formin>
            </section>
            <section id={Style.show}>
             <ShowStudents></ShowStudents>
            </section>  
        </div>
    )
}

export default Pages; 