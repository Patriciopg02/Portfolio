import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import './GeneralContainer.css';

export default function GeneralContainer() {
    return (
        <div className='GeneralContainer'>
            <Navbar/>
            <Projects/>
        </div>
    )
}