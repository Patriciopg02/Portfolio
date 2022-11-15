import './MoreofMe.css';
import fotoPerfil from '../../pngs/fotoPerfil.jpeg';
import github from '../../pngs/github.png';
import linkedin from '../../pngs/linkedin.png';
import emailjs from '@emailjs/browser';
import wpp from '../../pngs/wpp_png.png'
import { useState } from 'react';

export default function MoreofMe() {    

    const [form, setForm] = useState({
        email:'',
        message:''
    })

    const onChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const serviceID = 'service_9ensun8';
        const templateID = 'template_gvmy31r';
        const publicKey = 'zdesA5YJzChowTgnF';

        console.log(event.target);
        emailjs.sendForm(serviceID, templateID, event.target, publicKey)
        .then((response) => {
            console.log(response);
            alert('Sent!');
        }, (err) => {
            console.log(err);
        });
        setForm({
            email:'',
            message:''
        })
    }
    
    return (
        <div className='MoreofMe'>
                <div className='cont1'>
                    <div id='title'>
                        <div id='boxTitle'>
                            <h1>About me</h1>
                        </div>
                    </div>
                    <p id='textMoreOfMe'>
                        ◈ I'm from Argentina and i'm starting in this world about 1.5y ago<br/>
                        <br/>
                        ◈ I studied 2y in Universidad Nacional de Santiago del Estero the system's information licenciature career.<br/>
                        <br/>
                        ◈ And i'm graduated from the SoyHenry bootcamp in Fullstack Web Developer career<br/>
                        <br/>
                    </p>
                </div>
                <div className='cont2'>
                    <img src={fotoPerfil} id='fotoperfil' alt='fotoPerfil'/>
                    <h3 id='contact'>Contact with me!</h3>
                    <div className='redes'>
                        <a href='https://www.linkedin.com/in/patricio-pereyra-gargiulo-701617245/' target='_blank'>
                            <img className='imgContact' src={linkedin} alt='linkedin'/>
                        </a>

                        <a href='https://github.com/Patriciopg02' target='_blank'>
                            <img className='imgContact'  src={github} id='githubpng' alt='github'/>
                        </a>

                        <button type="button" id='openModalbtn' class="btn" data-bs-toggle="modal" data-bs-target="#emailModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color='lightblue' fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                        </button>

                        <div class="modal fade" id="emailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role='dialog' aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role='document'>
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Send an e-mail</h1>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <div class="mb-3">
                                        <form id='form' onSubmit={onSubmit}>
                                            <label for="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" name='email' id="email" placeholder="name@example.com" onChange={onChange} value={form.email}/>
                                            <label for="message" className="form-label">Email content</label>
                                            <textarea className="form-control" name='message' id="message" rows="3" onChange={onChange} value={form.message}></textarea>
                                            <input type="submit" className='btn btn-danger' id="button" value="Send Email" data-bs-dismiss="modal"></input>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href='https://wa.me/5493856224626?text=Hola,%20tu%20perfil%20me%20interesa!' target='_blank'>
                            <img src={wpp} className='imgContact'  id='wpp_png' alt='wpp_png'/>
                        </a>
                    </div>

                </div>

        </div>
    )
}