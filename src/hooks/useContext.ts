import {useContext} from 'react';
import { ContextIMC } from '../context/contextIMC';

const useContextData = () => {
    const context = useContext(ContextIMC);
    
    if(!context) alert('There not context');

    return context;
}

export default useContextData;
