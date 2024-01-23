import styled from "styled-components";

export const ShowIMC = styled.div`
    background-color: #1e293b;
    width: 95%;
    min-height: 10rem;
    margin: 0 auto;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h2 {
        display: flex;
        flex-direction: column;
        text-align: center;
        position: relative;
    }
    h2 span:nth-child(1) {
        font-size: 4rem;
        color: #fde047;
    }
    h2 span:nth-child(2) {
        font-size: 1.2rem;
        color: #fff;
        position: absolute;
        bottom: -.5rem;
        right: -.6rem;
    }

    @media screen and (min-width: 500px){
        width: 40rem;
    }
`

export const ContainerInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 50%;
    span {
        margin-right: 1rem;
        font-size: 1.6rem;
    }
    svg {
        color: ${(props) => props.color};
        font-size: 5rem;
    }

`