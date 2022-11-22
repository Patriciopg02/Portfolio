import styled, {keyframes} from 'styled-components';

export const FooterDiv = styled.div `
    color: ${({theme}) => theme.color5};
    background-color: ${({theme}) => theme.background_5};
    border-top: 1px solid ${({theme}) => theme.border_footer};
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 100vw;
    max-height: 30vh;
    height: 30vh;
    font-family: 'Josefin Sans';

    @media (max-width:600px) {
        align-items: center;
        flex-direction: column;
        text-align: center;
        max-height: 50vh;
        height: 50vh;
    
        p{
            font-size: 19px;
        }
    }

    @media (min-width:1400px) {
        p{
            font-size: 21px;
        }
    }
`

export const Div1 = styled.div `
    @media (max-width:600px) {
        max-width: 80vw;
    }
`
export const Div2 = styled.div `
    #techs {
        color: ${({theme}) => theme.techs};
    }
    
    @media (max-width:600px) {
        max-width: 80vw;
    }
`


export const Git = styled.div `
    display: flex;
    align-items: center;

    img {
        width: 35px;
        height: 35px;
        border: 1px solid transparent;
        transition: all .3s;
        margin-bottom: 15px;
        border-radius: 25px;
        background-color: aliceblue;
    }
    img:hover {
        transform: scale(110%);
    }
    p{
        margin-right: 15px;
    }

    @media (max-width:600px) {
        text-align: center;
        flex-direction: column;
        img {
            width: 45px;
            height: 45px;
        }
        p {
            font-size: 16px;
            margin-right: 0px;
        }
    }

    @media (min-width:1400px) {
        img {
            width: 45px;
            height: 45px;
        }
        p{
            font-size: 18px;
        }
    }
`