import {createContext, ReactElement, useReducer} from 'react';
import { IPropsContext, Actions, State, IContext } from '../interfaces/ContextIMC';
import * as IMC from '../datas/imcDatas';
import {optionsIMC} from './config/objOptionsIMC';

const calculateIMC = ({height, weight}: Actions):number => weight / height ** 2;

const checkTypeIMC = (imc: number): string => {
    if(imc <= 18.5) {
        return optionsIMC.level_0;
    }
    else if(imc >= 18.6 && imc <= 24.9) {
        return optionsIMC.level_1;
    }
    else if(imc >= 25 && imc <= 29.9) {
        return optionsIMC.level_2;
    }
    else if(imc >= 30 && imc <= 34.9) {
        return optionsIMC.level_3;
    }
    else if(imc >= 35 && imc <= 39.9) {
        return optionsIMC.level_4;
    } else if(imc >= 40) {
        return optionsIMC.level_5
    }
    return 'default';
}

const reducerIMC = (state: State, action: Actions): State => {
    
    const imc = action && calculateIMC({...action});
    const status = checkTypeIMC(imc);

    switch(status) {
        case optionsIMC.level_0 :
            return state =  {
                imc,
                info: IMC.datas[0]
            };
        case optionsIMC.level_1 :
            return state = {
                ...state,
                imc,
                info: IMC.datas[1]
            };
        case optionsIMC.level_2 :
            return state = {
                imc,
                info: IMC.datas[2]
            };
        case optionsIMC.level_3 :
            return state = {
                imc,
                info: IMC.datas[3]
            };
        case optionsIMC.level_4 :
            return state = {
                imc,
                info: IMC.datas[4]
            };
        case optionsIMC.level_5 :
            return state = {
                imc,
                info: IMC.datas[5]
            };
        default : 
            return null;
    }
}

export const ContextIMC = createContext<IContext | null>(null);

export const ContextIMCProvider = ({children}: IPropsContext): ReactElement => {
    const [datas, dispatchIMC] = useReducer(reducerIMC, null);
    
    return (
    <ContextIMC.Provider value={{datas, dispatchIMC}}>
            {children}
    </ContextIMC.Provider>
    )
  
}
