import styled, {keyframes} from 'styled-components';

export const LoadingAnim = keyframes `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const MoreofMeDiv = styled.div `
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  background-color: ${({theme}) => theme.background_4};
  font-family: 'Josefin Sans';
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  #AlertSent {
    position: absolute;
    left: 100%;
    margin-top: 50px;
  }

  @media (max-width:600px) {
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    align-items: center;
    max-height: 200vh;
    text-align: center;
  }
`


export const Cont1 = styled.div `
  min-width: 80vh;

  @media (max-width:600px) {
    max-width: 80vh;
    display: flex;
    margin-right: 25px;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.div `
  width: 350px;
  background-color: rgb(255, 186, 186);
  transform: skew(20deg);
  margin-bottom: 40px;
  margin-top: 50px;
  border: 2px solid white;
  transition: all .5s;

  &:hover {
    width: 400px;
  }

  @media (max-width:600px) {
    max-width: 80vw;
    margin-right: 100px;
    width: 80vw;
  
    &:hover {
      width: 80vw;
    }
  }

  @media (min-width:1400px) {
    width: 400px;
    &:hover {
      width: 450px;
    }
  }
`
export const BoxTitle = styled.div `
  width: 200px;
  background-color: rgb(255, 186, 186);
  transform: skew(-20deg);
  border-bottom: 2px solid white;
  margin-bottom: -2px;
  margin-left: -10px;

  h1 {
    font-size: 60px;
    text-align: center;
    margin-top: 15%;
    margin-left: 30px;
    width: 240px;
    color: rgb(187, 94, 94);
    text-shadow: 4px 2px 0px rgb(73, 50, 50);
  }

  @media (max-width:600px) {
    width: 100px;
    h1 {
      font-size: 38px;
    }
  }

  @media (min-width:1400px) {
    h1 {
      font-size: 80px;
    }
  }
`

export const TextyBTN = styled.div `
  #textMoreOfMe {
    color: ${({theme}) => theme.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 440px;
    font-size: 20px;
    margin-left: 30px;
  }

  #downCV {
    margin-left: 30px;
    color: #A54E4E;
    background-color: rgb(255, 186, 186);
    border: 1px solid transparent;
    font-weight: bold;
    transition: all .3s;
  }

  #downCV:hover {
    transform: scale(110%);
    background-color: rgb(231, 168, 168);
  }
  @media (max-width:600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #downCV {
      margin-left: 20px;
    }

    #textMoreOfMe {
      max-width: 80vw;
      font-size: 17px;
    }
  }
  @media (min-width:1400px) {
    #textMoreOfMe {
      font-size: 27px;
    }
  }
`


export const Cont2 = styled.div `
  margin-top: 4%;
  margin-right: 10%;
  text-align: center;

  #fotoperfil {
    width: 370px;
    height: 480px;
    border-radius: 1%;
    margin-bottom:15px;
  }
  
  #contact {
    color: ${({theme}) => theme.keep_4};
    border-bottom: 1px solid ${({theme}) => theme.keep_4};
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  @media (max-width:600px) {
    text-align: center;
    margin-left: 8%;
    width: 80vw;
    max-width: 80vw;

    #fotoperfil {
      width: 230px;
      height: 300px;
      border-radius: 1%;
    }
  }

  @media (min-width:1400px) {
    #fotoperfil {
      width: 480px;
      height: 600px;
      border-radius: 1%;
    }
  }
`

export const Redes = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    border: 1px solid transparent;
    border-radius: 7px;
    transition: all .3s;
  }

  .imgContact:hover {
    transform: scale(110%);
  }

  #githubpng {
    border-radius: 25px;
    background-color: aliceblue;
  }

  #exampleModalLabel {
    color: white;
  }

  .form-control {
    margin-bottom: 10px;
    background-color: rgb(73, 73, 73);
    color: white;
  }

  #wpp_png {
    border-radius: 25px;
  }

  #button{
    transition: all .3s;
  }

  #button:hover {
    transform: scale(105%);
    border: 1px solid #ffbebe;
  }

  #openModalbtn {
    width: 40px;
    height: 35px;
    padding: 0px;
    background-color: rgb(0, 0, 0);
    transition: all .3s;
  }
  #openModalbtn:hover {
    background-color: rgb(31, 31, 31);
    transform: scale(110%);
  }

  @media (max-width:600px) {
    margin-bottom: 40px;
    img {
      width: 45px;
      height: 45px;
      border: 1px solid transparent;
      border-radius: 7px;
      transition: all .3s;
    }
    .imgContact:hover {
      transform: scale(110%);
    }
    #githubpng {
      border-radius: 25px;
      background-color: aliceblue;
    }
    #openModalbtn {
      width: 50px;
      height: 45px;
    }
    .modal {
      width: 80vw;
      max-width: 80vw;
      padding: 0px;
     }
  }

  @media (min-width:1400px) {
    .imgContact {
      width: 45px;
      height: 45px;
      border: 1px solid transparent;
      border-radius: 7px;
      transition: all .3s;
    }
    .imgContact:hover {
      transform: scale(110%);
    }
    #githubpng {
      border-radius: 25px;
      background-color: aliceblue;
    }
    #fotoperfil {
      width: 480px;
      height: 600px;
      border-radius: 1%;
    }
    #openModalbtn {
      width: 50px;
      height: 45px;
    }
  }
`



/* Loading */ 
export const Loading = styled.div `
  display: inline-block;
  position: absolute;
  left: 120%;
  margin-top: 50px;
  width: 80px;
  height: 80px;

  div {
    animation: ${LoadingAnim} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  div:nth-child(1) {
    animation-delay: -0.036s;
  }
  div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  div:nth-child(2) {
    animation-delay: -0.072s;
  }
  div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  div:nth-child(3) {
    animation-delay: -0.108s;
  }
  div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  div:nth-child(4) {
    animation-delay: -0.144s;
  }
  div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  div:nth-child(5) {
    animation-delay: -0.18s;
  }
  div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  div:nth-child(6) {
    animation-delay: -0.216s;
  }
  div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  div:nth-child(7) {
    animation-delay: -0.252s;
  }
  div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  div:nth-child(8) {
    animation-delay: -0.288s;
  }
  div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`