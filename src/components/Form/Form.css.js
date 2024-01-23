import styled from "styled-components";

export const ContainerForm = styled.div`
    width: 95%;
    background-color: #1e293b;
    margin: 2rem auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
        letter-spacing: 1.2px;
        color: #fef08a;
        font-size: 2rem;
        width: 90%;
        margin: 2rem auto;
    }
    @media screen and (min-width: 500px){
        width: 40rem;
    }
`

export const Form = styled.form`
    width: 95%;
    margin: 0 auto;
    margin-bottom: 5rem;
`
export const InputContainer = styled.div`

    margin-top: 1rem;
    padding: .5rem;
    label {
        width: 100%;
        min-height: 4.5rem;
        display: inline-block;
        position: relative;
    }
    span {
        color: #fff;
        font-weight: bold;
        font-size: 1.8rem;
        position: absolute;
        top: 15px;
        left: 20px;
        transition: all .5s ease-in-out;
    }
    .onFocusSpan {
        color: #fcd34d;
        font-size: 1rem;
        top: .4rem;
        
    }
    input {
        background-color: #334155;
        height: 5rem;
        width: 90%;
        border: none;
        border: .1rem solid #fff;
        border-radius: 1rem;
        padding: 2rem;
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        outline: none;
        transition: all .9s ease-in-out;
    }
    .onFocusInput {
        background-color: #4b5563;
        border: .1rem solid #fef08a;
    }
    svg {
        color: #d4d4d8;
        position: absolute;
        right: 8rem;
        top: 1.5rem;
        font-size: 2rem; 
    }
    p {
        color: red;
        margin-top: 1rem ;
        margin-left: .5rem;
        font-size: 1.5rem;
        letter-spacing: 1.5px;
    }
    .svgOnfocus {
        color: #fef08a;
    }


`
export const ButtonsContainer = styled.div`
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    button {
        margin: .5rem auto;
        width: 100%;
        border-radius: 1rem;
        font-size: 1.8rem;
        border: none;
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        transition: all .5s ease-in-out;
        padding: .9rem 0;
        overflow: hidden;
    }

    button:nth-child(1) {
        background-color: #eab308;
    }
    button:nth-child(1):hover {
        background-color: #d97706;
    }
    button:nth-child(2) {
        background-color: #334155;
    }
    button:nth-child(2):hover {
        background-color: #475569;
    }
 
`