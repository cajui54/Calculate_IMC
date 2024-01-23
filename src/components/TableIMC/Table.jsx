import React from 'react';
import * as Style from './Table.css';
import { datas } from '../../datas/imcDatas';
const Table = () => {
  return (
    <Style.TableContainer>
      <h2>Classificação IMC</h2>

      <Style.ListInfo>
        {
            datas && ( datas.map((data, index) => (
                <Style.Li key={index} color={data.color}>
                  <span>
                    {<data.svg/>}
                  </span>
                    <div>
                        <p>{data.imc}</p>
                        <p>{data.status}</p>
                    </div>
                </Style.Li>
            ))

            )
        }
    
      </Style.ListInfo>
    </Style.TableContainer>
  )
}

export default Table
