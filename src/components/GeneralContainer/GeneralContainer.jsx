import MoreofMe from '../MoreofMe/MoreofMe';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Whatido from '../What i do/whatido';
import './GeneralContainer.css';

export default function GeneralContainer() {
    return (
        <div className='GeneralContainer'>
            {/* <Navbar/> */}
            <Whatido/>
            <Projects/>
            <MoreofMe/>
        </div>
    )
}