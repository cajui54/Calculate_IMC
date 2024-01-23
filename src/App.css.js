import styled from "styled-components";

export const Main = styled.main`
    margin: 2rem auto;
    width: 100%;
    min-height: 40rem;
`
export const TitleMain = styled.h1`
    text-align: left;
    padding-left: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    p:nth-child(1) {
        color: #d4d4d8;
        font-size: 5rem;
    }
    p:nth-child(2) {
        font-size: 1rem;
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        color: #fff;
        background-color: #f3ec78;
        background-image: linear-gradient(45deg, #fefce8, #fef9c3, #fde047);
        background-size: 100%;
        background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }
`