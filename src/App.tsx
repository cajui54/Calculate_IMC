import React, { useEffect } from 'react';
import GlobalStyle from './GlobalStyle.css';
import * as Style from './App.css';
import Form from './components/Form/Form';
import Table from './components/TableIMC/Table';
import { ContextIMCProvider } from './context/contextIMC';
import ShowIMC from './components/Output/ShowIMC';
import useContextData from './hooks/useContext';

function App() {
  const {datas}: any = useContextData();
  
  return (
    <Style.Main>
      <GlobalStyle/>
      <Style.TitleMain>
          <p>IMC</p> 
          <p>
            <span>Índice</span>
            <span>de Massa</span>
            <span>Corporal</span>
          </p>  
      </Style.TitleMain>
      <Form/>
      <Table/>
      { datas && <ShowIMC/>}
    </Style.Main>
  );
}

export default App;
