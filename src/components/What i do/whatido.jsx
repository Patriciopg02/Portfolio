import './whatido.css';
import png1 from '../../pngs/1.png'
import png2 from '../../pngs/2.png'
import png3 from '../../pngs/3.png'
import png4 from '../../pngs/4.png'
import png5 from '../../pngs/5.png'
import png6 from '../../pngs/6.png'
import png7 from '../../pngs/7.png'
import png8 from '../../pngs/8.png'
import png9 from '../../pngs/9.png'
import png10 from '../../pngs/10.png'
import png11 from '../../pngs/11.png'
import png12 from '../../pngs/12.png'
export default function Whatido() {

    return (
        <div className='whatido'>
            <div>
                <div className='cont1'>
                    <div id='title'>
                        <h1>What i do?</h1>
                    </div>
                    <div id='textWhatido'>
                        <p>
                        ◈ I am a Full Stack web developer with an inclination towards Front End.<br/>
                        <br/>
                        ◈ I have the ability to create and design web pages, define their style and appearance with good judgment.<br/>
                        <br/>
                        ◈ Day by day I try to improve myself, learning new technologies to specialize in this area.<br/>
                        <br/>
                        ◈ The technologies that I dominate at the moment are →
                        </p>
                    </div>
                </div>
            </div>
            <div id='techsContainer'>
                <div className='techs1'>
                    <img src={png1} alt='png'/>
                    <img src={png2} alt='png'/>
                    <img src={png3} alt='png'/>
                    <img src={png4} alt='png'/>
                    <img src={png5} alt='png'/>
                    <img src={png6} alt='png'/>
                </div>
                <div className='techs2'>
                    <img src={png7} alt='png'/>
                    <img src={png8} alt='png'/>
                    <img src={png9} alt='png'/>
                    <img src={png10} alt='png'/>
                    <img src={png11} alt='png'/>
                    <img src={png12} alt='png'/>
                </div>
            </div>
            <div className='keepDown'>
                <h3>Keep going down</h3>
                <h2>↓</h2>
            </div>
        </div>
    )
}