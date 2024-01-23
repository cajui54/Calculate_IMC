import React, { useRef } from 'react';
import * as Style from './Show.css'
import useContextData from '../../hooks/useContext';
import {IContext} from '../../interfaces/ContextIMC';

const ShowIMC: React.FunctionComponent = () => {
    const {datas}: any = useContextData();
    
  return (
    <Style.ShowIMC id='outputContainer'>
      {datas && (<>
        <h2>
          <span>{datas.imc.toFixed('1')}</span>
          <span>Seu IMC</span>
        </h2>

        <Style.ContainerInfo color={datas.info.color}>
          <span>{datas.info.status}</span>
          {<datas.info.svg/>}
        </Style.ContainerInfo>

      </>)}
    </Style.ShowIMC>
  )
}

export default ShowIMC
