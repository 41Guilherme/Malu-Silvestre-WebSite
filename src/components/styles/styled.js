import styled from "styled-components";

export const Div = styled.div`
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: row;
    gap: 0px;
    
`
export const Div2 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right:0;
`
export const Navbar = styled.div`
    background-color:#957AB0;
    padding: 10px;
    width: 18rem;
    height: 29rem;
    border: 1px #000 solid;
    text-align: center;
    h1{
        font-family: 'Times New Roman','Alegreya SC', serif;
        font-size:30px;
        color: white;
    }

`
export const ButtonArea = styled.div`
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
export const Welcome = styled.div`
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
export const Social = styled.div`
    margin-left: 1rem;
    padding: 10px;
    background-color: #957AB0;
    color: #fff;
    width: 16rem;
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

export const AboutArea = styled.div`
    padding: 10px;
    display: flex;
    margin-left: 2rem;
    gap: 20px 20px;
    img{
        width: 315px;
        height: 400px;
        border-radius: 5px;
        box-shadow: inset 0 0 1em gold, 0 0 1em #4E4563;
    }
    p{
        font-size:2.1rem;
    }
`