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
                        <div className='cont1' data-aos="zoom-in-right"
                        data-aos-delay="150"
                        data-aos-duration="2000">
                                <div id='title'>
                                    <div id='boxTitle'>
                                        <h1>What i do?</h1>
                                    </div>
                                </div>
                                <div id='textWhatido' data-aos="zoom-in-right"
                        data-aos-delay="250"
                        data-aos-duration="2000">
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

                    <div id='techsContainer' data-aos="fade-up"
                                data-aos-delay="1000"
                                data-aos-duration="3000">
                        <div className='techs1'>
                            <div className='techAndTitle'>
                                <img src={png1} alt='png'/>
                                <p>HTML</p>
                            </div>
                            <div className='techAndTitle'>
                                <img src={png2} alt='png'/>
                                <p>CSS</p>
                            </div>
                            <div className='techAndTitle'>
                                <img src={png3} alt='png'/>
                                <p>Javascript</p>
                            </div>
                            <div className='techAndTitle'>
                                <img src={png4} alt='png'/>
                                <p>Gitflow</p>
                            </div>
                            <div className='techAndTitle'>
                                <img src={png5} alt='png'/>
                                <p>Node</p>
                            </div>
                            <div className='techAndTitle'>
                                <img src={png6} alt='png'/>
                                <p>React</p>
                            </div>
                        </div>
                        <div className='techs2'>
                            <div className='techAndTitle'>   
                                <img src={png7} alt='png'/>
                                <p>Redux</p>
                            </div>
                            <div className='techAndTitle'>
                                <img src={png8} alt='png'/>
                                <p>Bootstrap</p>
                            </div>
                            <div className='techAndTitle'>                        
                                <img src={png9} alt='png'/>
                                <p>MaterialUI</p>
                            </div>
                            <div className='techAndTitle'>
                                <img src={png10} alt='png'/>
                                <p>PostgreSQL</p>                  
                            </div>
                            <div className='techAndTitle'>                        
                                <img src={png11} alt='png'/>
                                <p>Sequelize</p>
                            </div>
                            <div className='techAndTitle'>
                                <img src={png12} alt='png'/>
                                <p>Express</p>                        
                            </div>
                        </div>
                    </div>
                    <div className='keepDown' data-aos="fade-down"
                                data-aos-delay="1000"
                                data-aos-duration="3000">
                        <h3>Keep going down</h3>
                        <h2>↓</h2>
                    </div>
                </div>
          
    )
}