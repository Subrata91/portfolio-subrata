import './skills.css';
import Programming from './Programming.jsx';
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';
import Databases from './Databases.jsx';

function Skills() {
    return(
        <section className='skills section' id='skills'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Technologies that I've been pursuing and practicing throughout these years..</span>
            <div className='skills__container container grid'>
                <Programming />
                <Frontend />
                <Backend />
                <Databases />
            </div>
        </section>
    );
}

export default Skills;