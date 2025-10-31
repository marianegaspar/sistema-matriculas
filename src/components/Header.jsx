import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <h1>StudyLink</h1>
            <nav>
                <ul>
                   <li><Link to="/course-info">Disciplinas</Link></li>
                   <li><Link to="/courses">Cursos</Link></li>
                   <li><Link to="/">Matrículas</Link></li> 
                   <li><Link to="/card-bullet">Matrículas</Link></li> 
                   <li><Link to="/">Calendário</Link></li> 
                   <li><Link to="/">Notas</Link></li>  
                </ul>
            </nav>
        </header>
    );
}

export default Header;