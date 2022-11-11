import './Projects.css';
import github from '../../pngs/github.png'
import linkedin from '../../pngs/linkedin.png'

export default function Projects() {
    return (
        <div className='projects'>
            <div>
                <div className='title'>
                    <h1>How do i do it?</h1>
                </div>
                <div className='projectsText'>
                    <p>
                        ◈ Here you can see personal projects or in which I contributed →
                    </p>

                </div>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="..." className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Recipes App</h5>
                        <p>
                            It is a SPA, which consumes data from an external API of recipes, and renders them in cards, you can filter, order and access the detail of each one, in addition to creating a new one.
                            Backend and Frontend made by me.
                            This project is made for the SoyHenry bootcamp!
                        </p>
                        <div className='icons'>
                            <a href='https://www.linkedin.com/feed/update/urn:li:activity:6981281760982503424/' target='_blank'>
                                <img src={linkedin} alt='linkedin'/>
                            </a>
                            <a href='https://github.com/Patriciopg02/Recipes-APP' target='_blank'>
                                <img src={github} alt='github'/>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <a href='https://concatus.vercel.app/' target='_blank'>
                            <h5>Concat US</h5>
                        </a>
                            <p>
                                Project in which I contributed, it is a social network, in which the main objective is the creation of events, in addition to being able to post publications, comments, etc.
                                It also has a global chat, a section with your profile information, and a donation section and payment gateway to become a premium user.
                                <br/>
                                I worked on 90% of the web decoration, i made the responsive and most Frontend components.
                            </p>
                            <div className='icons'>
                            <a href='#' target='_blank'>
                                <img src={linkedin} alt='linkedin' target='_blank'/>
                            </a>
                            <a href='https://github.com/Patriciopg02/SocialNetworkingApp' target='_blank'>
                                <img src={github} alt='github'/>
                            </a>
                            </div>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}