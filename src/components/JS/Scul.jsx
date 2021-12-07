import React from "react";
import { Fragment } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Img1 from '../images/Img1.jpeg'
import Img2 from '../images/sangre.jpg'

const Div = styled.div`
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: row;
    gap: 0px;
    
`
const Div2 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right:0;
`
const Navbar = styled.div`
    background-color:#957AB0;
    padding: 10px;
    width: 16rem;
    height: 29rem;
    border: 1px #000 solid;
    text-align: center;
    h1{
        font-family: 'Times New Roman','Alegreya SC', serif;
        font-size:30px;
        color: white;
    }

`
const ButtonArea = styled.div`
    display: flex;
    margin-top: 2rem;
    justify-content: column;
    flex-wrap: wrap;
    a{
        display: flex;
        width: 100%;
        justify-content: center;
        color: white;
        border-color: #fff;
    }
    button{
        background-color: #4E4563;
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 1rem;
        padding: 5px;
        font-family: 'Times New Roman', 'Alegreya SC', serif;
        color: white;
        border-color: #fff;
        
    }
    button:hover{
        transform: scale(1.05);
        transition: all 0.5s;
        color: #D8BFD8 ;
        border-color:#D8BFD8;
    }
`
const Welcome = styled.div`
    padding: 10px;
    width: 120rem;
    height: 47.55rem;
    background-color: #E6E6FA;
    justify-content: center;
    text-align: center;
    font-size: 5rem;
    color: #4E4563;
    div{
        font-size: 3.5rem;
    }
    p{
        margin-top: 5px;
        margin-bottom: 2px;
        font-size: 4rem;
    }
    hr{
        margin-top: 0;
    }
`
const Social = styled.div`
    margin-left: 1rem;
    padding: 10px;
    background-color: #957AB0;
    color: #fff;
    width: 13rem;
    height: 14rem;
    display: flex;
    border: 1px solid #000;
    
    justify-content: column;
    flex-wrap: wrap;
    a{
        color: #4E4563;
    }
    button{
        display: flex;
        width: 40px;
        height: 40px;
    }
    span{
        margin-left: 1.2rem;
        margin-right: 4rem;
    }
`
//957AB0 roxo claro
//4E4563 roxo escuro

const AboutArea = styled.div`
    padding: 10px;
    display: flex;
    margin-left: 2rem;
    gap: 80px 120px;
    flex-wrap: wrap;
    img{
        width: 320px;
        height: 400px;
        border-radius: 5px;
        box-shadow: inset 0 0 1em gold, 0 0 1em #4E4563;
    }
    p{
        font-size:2.1rem;
    }
   
`

export default function Home(){
    return(
        <Fragment>
            <Div>
                <Div2>
                    <Navbar>
                        <h1>Malu Silvestre</h1>
                        <hr/>
                        <ButtonArea>
                            <Link to='/'><button>Home</button></Link>
                            <Link to='/about'><button>About</button></Link>
                            <Link to='/paint'><button>Paintings</button></Link>
                            <Link to='/iluss'><button>Illustrations</button></Link>
                            <Link to='/scul'><button>Sculptures</button></Link>
                            <Link to='/photo'><button>Photographs</button></Link>
                            <Link to='/arct'><button>Articles</button></Link>
                        </ButtonArea>
                    </Navbar>
                    <Social>
                        <span>Instagram: <br/><a href='https://instagram.com/marttrevs?utm_medium=copy_link'target="_blank" >@marttrevs</a></span>
                        <span>LinkedIn:<br/><a href='https://www.linkedin.com/in/maria-luiza-bastos-silvestre-b8a134218' target="_blank"> Malu Silvestre </a></span>
                        <span>Email: <a href='mailto:malusilvestre.ms@gmail.com' target="_blank">malusilvestre.ms@gmail.com</a>  </span>
                        <span>Lattes: <br/><a href='https://www.google.com.br/?gws_rd=ssl'>Currículo</a></span>
                    </Social>
                </Div2>
                <Welcome>
                   <p>Sculptures</p> 
                   <hr/>
                   <AboutArea>
                       <div>
                            <img src={Img1} />
                            <p>'Pavão', 2021</p>
                       </div>
                       <div>
                            <img  src={Img2} />
                            <p>'Sangre', 2021</p>
                       </div>
                       
                   </AboutArea>
                </Welcome>
            </Div>
        </Fragment>
    );
}