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
    background-color: ${({theme}) => theme.background_3};
    font-family: 'Josefin Sans';

    @media (max-width:600px) {
        flex-direction: column;
        justify-content: flex-start;
        height: 90vh;
        max-height: 90vh;
    }
`
export const Title = styled.div `
    width: 350px;
    background-color: ${({theme}) => theme.box_3};
    transform: skew(20deg);
    margin-bottom: 40px;
    margin-top: 50px;
    border: 2px solid ${({theme}) => theme.border_box3};
    transition: all .5s;

    &:hover {
        width: 400px;
    }

    @media (max-width:600px) {
        width: 80vw;
        margin-left: 5%;
        margin-top: 50px;
        &:hover {
            width: 80vw;
        }
    }
`

export const BoxTitle = styled.div `
    width: 200px;
    background-color: ${({theme}) => theme.box_3};
    transform: skew(-20deg);
    border-bottom: 2px solid ${({theme}) => theme.border_box3};
    margin-bottom: -2px;
    margin-left: -10px;

    h1 {
        font-size: 60px;
        text-align: center;
        margin-left: 30px;
        padding-top: 5px;
        width: 240px;
        color: ${({theme}) => theme.h1_3};
        text-shadow: 4px 2px 0px ${({theme}) => theme.shadow_3};
    }

    @media (max-width:600px) {
        width: 50vw;
        h1 {
            font-size: 38px;
            width: 280px;
        }
    }
`

export const ProjectsText = styled.div `
    color: ${({theme}) => theme.color};
    width: 440px;
    font-size: 20px;
    margin-left: 30px;

    @media (max-width:600px) {
        p {
            width: 80vw;
            font-size: 15px;
            margin-left: 30px;
        }
    }

    @media (min-width:1400px) {
        font-size: 25px;
    }
`
export const ContainerKnowMore = styled.div `
    display: flex;

    #knowmore {
        color:${({theme}) => theme.keep_3};
        font-size: 22px;
        margin-left: 20px;
        margin-top: 50px;
    }
    #knowmore2 {
        color:${({theme}) => theme.keep_3};
        font-size: 22px;
        margin-left: 20px;
        margin-top: 50px;
        animation: ${selectDown} 1s infinite reverse;
    }

    @media (max-width:600px) {
        display: none;
    }

    @media (min-width:1400px) {
        #knowmore {
            font-size: 22px;
            margin-left: 20px;
            margin-top: 100px;
        }
        #knowmore2 {
            font-size: 32px;
            margin-left: 20px;
            margin-top: 100px;
        }
    }
`

export const CarouselExampleCaptions = styled.div `
    width: 1000px;
    height: 100vh;
    background-color: ${({theme}) => theme.carousel_bg};

    @media (max-width:600px) {
        width: 95vw;
        height: 28vh;
    }

    @media (min-width:1400px) {
        width: 74%;
    }
`

export const CarouselItem = styled.div `
    height: 100vh;
    border-left: 1px solid ${({theme}) => theme.border_box3};

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
        color:${({theme}) => theme.color} ;
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
        border-radius: 25px;
    }
    svg:hover {
        background-color:black;
    }
    #githubpng {
        border-radius: 16px;
        background-color: aliceblue;
    }
    .itemsCarousel:hover {
        transform: scale(110%);
    }

    @media (max-width:600px) {
        height:53vh;
        border-left: none;
        .imgProject {
            width: 95vw;
            height: 28vh;
            margin: 0px;
        }
        h5 {
            font-size: 25px;
        }
        p {
            font-size:10px;
        }
        img{
            width: 22px;
            margin-left: 15px;
            margin-right: 5px;
            height: 22px;
        }
    }

    @media (min-width:1400px) {
        .imgProject {
            height: 70%;
        }
    
        h5 {
            font-size: 55px;
        }
    
        p {
            font-size:20px;
            margin-bottom: 40px;
        } 

        img{
            width: 45px;
            height: 45px;
        }

        #githubpng {
            border-radius: 25px;
        }
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

    @media (max-width:600px) {
        background-color: ${({theme}) => theme.box_3};
        border:1px solid ${({theme}) => theme.border_box3};
        padding: 3px;
        border-radius: 15px;
        position: absolute;
        bottom: 0px;
        right: -50px;
        #openModalbtn {
            width: 25px;
            margin:0px;
        }
    }

    @media (min-width:1400px) {
        #openModalbtn {
            border-radius: 25px;
            width: 45px;
        }
    }
`

export const ModalBody = styled.div `
    margin-top:10px;
    p{
        font-size:18px;
        color: white;
    }
    h4 {
        color: rgb(190, 42, 42);
        font-size: 20px;
        margin-bottom: 0px;
    }
`