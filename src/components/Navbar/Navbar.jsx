import './Navbar.css';

export default function Navbar() {
    return (
        <div className='Navbar'>
            <span className='navitem'><a href='#'>Home</a></span>
            <span className='navitem'><a href='#'>Projects</a></span>
            <span className='navitem'><a href='#'>About me</a></span>
            <span className='navitem'><a href='#'>Technologies</a></span>
            <span className='navitem'><a href='#'>Contact me</a></span>
        </div>
    )
}