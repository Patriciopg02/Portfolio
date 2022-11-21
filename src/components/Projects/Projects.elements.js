import styled, {keyframes} from 'styled-components';

export const selectDown = keyframes `
    50% {
        transform: translateY(-15%);
    }
`


export const ProjectsDiv = styled.div `
    height: 100vh;
    width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ececec;
    font-family: 'Josefin Sans';
`
export const Title = styled.div `
    width: 350px;
    background-color: #f6e6e6;
    transform: skew(20deg);
    margin-bottom: 40px;
    margin-top: 50px;
    border: 2px solid #efbbbb;
    transition: all .5s;

    &:hover {
        width: 400px;
    }
`

export const BoxTitle = styled.div `
    width: 200px;
    background-color: #f6e6e6;
    transform: skew(-20deg);
    border-bottom: 2px solid #efbbbb;
    margin-bottom: -2px;
    margin-left: -10px;

    h1 {
        font-size: 60px;
        text-align: center;
        margin-left: 30px;
        padding-top: 5px;
        width: 240px;
        color: #000000;
        text-shadow: 4px 2px 0px #ebacac;
    }
`

export const ProjectsText = styled.div `
    color: rgb(0, 0, 0);
    width: 440px;
    font-size: 20px;
    margin-left: 30px;
`
export const ContainerKnowMore = styled.div `
    display: flex;

    #knowmore {
        color:#00000062;
        font-size: 22px;
        margin-left: 20px;
        margin-top: 50px;
    }
    #knowmore2 {
        color:#00000062;
        font-size: 22px;
        margin-left: 20px;
        margin-top: 50px;
        animation: ${selectDown} 1s infinite reverse;
    }
`

export const CarouselExampleCaptions = styled.div `
    width: 1000px;
    height: 100vh;
    background-color: #f6e6e6;
`

export const CarouselItem = styled.div `
    height: 100vh;
    border-left: 1px solid #efbbbb;

    .imgProject {
        height: 60%;
        width: 100%;
    }
    h5 {
        font-size: 35px;
        color:rgb(221, 0, 0) ;
        text-shadow: 2px 2px 1px rgb(255, 255, 255);
    }
    p {
        color:rgb(0, 0, 0) ;
    }
    a {
        text-decoration: none;
    }
    img{
        width: 35px;
        height: 35px;
        margin-right: 10px;
        transition: all .2s;
        border: 1px solid transparent;
        transition: all .3s;
        border-radius: 4px;
    }
    svg {
        transition: all .2s;
        border: 1px solid transparent;
        border-radius: 16px;
    }
    #githubpng {
        border-radius: 16px;
        background-color: aliceblue;
    }
    .itemsCarousel:hover {
        transform: scale(110%);
    }
`

export const Icons = styled.div `
    position: absolute;
    bottom: 10px;
    right: 0px;

    #openModalbtn {
        padding: 0px;
        border-radius: 16px;
        margin-right: 10px;
        width: 35px;
    }
`


export const ModalHeader = styled.div `
    border-bottom: 1px solid rgb(68, 68, 68);
`

export const ModalBody = styled.div `
    color: white;

    h4 {
        color: rgb(190, 42, 42);
        font-size: 20px;
        margin-bottom: 0px;
    }

`

export const ModalContent = styled.div `
    background-color: rgb(25, 25, 25);
`


/* Pantallas PC GRANDES */
@media (min-width:1400px) {
    #carouselExampleCaptions {
        width: 74%;
    }
}
    .carousel-item .imgProject {
        height: 70%;
    }
    .carousel-item h5 {
        font-size: 55px;
    }
    .carousel-item p {
        font-size:20px;
        margin-bottom: 40px;
    }
    .projects .projectsText {
        font-size: 25px;
    }
    #knowmore {
        font-size: 22px;
        margin-left: 20px;
        margin-top: 100px;
    }
    #knowmore2 {
        color:greenyellow;
        font-size: 32px;
        margin-left: 20px;
        margin-top: 100px;
        animation: selectDown 1s infinite reverse;
    }
    .icons #openModalbtn {
        border-radius: 25px;
        width: 45px;
    }
    .carousel-item img{
        width: 45px;
        height: 45px;
    }
    .carousel-item #githubpng {
        border-radius: 25px;
    }
}
/* Pantallas Móviles */
@media (max-width:600px) {
    .projects {
        flex-direction: column;
        justify-content: flex-start;
        height: 90vh;
        max-height: 90vh;
    }
    
    .projects .title h1 {
        font-size: 38px;
        width: 280px;
    }
    .projects .title #boxTitle {
        width: 50vw;
    }
    .projects .title:hover {
        width: 80vw;
    }
    .projects .title {
        width: 80vw;
        margin-left: 5%;
        margin-top: 50px;
    }    
    .projects .projectsText p{
        width: 80vw;
        font-size: 15px;
        margin-left: 30px;
    }
    .modal-body h4 {
        color: rgb(190, 42, 42);
        font-size: 20px;
        margin-bottom: 0px;
    }
    #carouselExampleCaptions {
        width: 95vw;
        height: 28vh;
    }
    .carousel-item {
        height:53vh;
    }
    .carousel-item .imgProject {
        width: 95vw;
        height: 28vh;
        margin: 0px;
    }
    .carousel-item h5 {
        font-size: 15px;
    }
    .carousel-item p {
        font-size:10px;
    }
    .containerKnowMore {
        display: none;
    }
    .carousel-item img{
        width: 22px;
        margin-left: 15px;
        margin-right: 5px;
        height: 22px;
    }
    .icons #openModalbtn {
        width: 25px;
        margin:0px;
    }
    .carousel-item .icons {
        background-color: rgb(57, 1, 1);
        padding: 3px;
        border-radius: 15px;
        position: absolute;
        bottom: 0px;
        right: -50px;
    }
}