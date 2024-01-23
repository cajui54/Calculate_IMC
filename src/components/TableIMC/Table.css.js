import styled from "styled-components";

export const TableContainer = styled.div`
    width: 95%;
    min-height: 30rem;
    margin: 3rem auto;
    
    h2 {
        font-size: 3rem;
        background-color: #f3ec78;
        background-image: linear-gradient(45deg, #fefce8, #fef9c3, #fde047);
        background-size: 100%;
        background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }
    @media screen and (min-width: 500px){
        width: 40rem;
    }
`
export const ListInfo = styled.ul`
    margin: 2rem auto;
    padding: 1rem;
    list-style: none;
`
export const Li = styled.li`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        background-color: #1e293b;
        margin: 1rem 0;
        border-radius: 5px;
        color: #fff;
        transition: all .8s ease-in-out;
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 5px #fff;
    }
    span {
        font-size: 3rem;
        color: ${(props) => props.color};
    }
    div {
        flex-grow: 1;
        margin-left: 2rem;
    }
    div p:nth-child(1) {
        color: #fde047;
        font-size: 1.5rem;
        margin-bottom: .4rem;
        font-weight: bold;
    }
    div p:nth-child(2) {
        color: #78716c;
    }

`
export const ContainerInfo = styled.div`
    width: 80%;
    margin: 1rem auto;
    padding: 1rem;
    font-size: 1.2rem;
    color: #fff; 
    p span {
        margin-right: 1rem;
    }
    p a {
        color: yellow;
    }
`