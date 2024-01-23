import {FormEvent, FocusEvent, ChangeEvent, ReactNode, useEffect} from 'react';
import {useState, useRef} from 'react';
import * as Style from './Form.css';
import  {IFocus, defaultFocus, IMessageError, IInput} from '../../interfaces/IForm';
import { GiBodyHeight, GiWeightScale } from "react-icons/gi";
import useContextData from '../../hooks/useContext';
import {animateScroll as scroll} from 'react-scroll';


// fix onfocus svg
type KeysFocusSpan = 'spanHeight' | 'spanWeight';
type KeysFocusSVG = 'svgHeight' | 'svgWeight';

const Form = () => {
  const {datas, dispatchIMC}: any = useContextData();
  
  const [onFocus, setOnFocus] = useState<IFocus>(defaultFocus);
  const [showMessage, setShowMessage] = useState<IMessageError | null>({height: false, weight: false});
  const [inputs, setInputs] = useState<IInput>({height: null, weight: null});
  const refForm = useRef<HTMLElement | any>(null);
  
  const inputsNode =  () => refForm.current.querySelectorAll('[name]');

  const handleReset = () => {
    resetTextbox();
    setOnFocus(defaultFocus);
  }

  const resetTextbox = () => {
    const nodeList = inputsNode();
    let obj: IMessageError = {};

    [...nodeList].forEach(key => {
      obj = {...obj, [key.name]: false};
    });
    setShowMessage(obj)
  }

  const checkIfInputIsEmpty = () => {
    const nodeListInputs = inputsNode();
    let empty = true;
    let obj = {};

    [...nodeListInputs].forEach(element => {
      if(!element.value) {
        obj = {...obj, [element.name]: true};
        empty = false;
      } else {
        obj = {...obj, [element.name]: false};
      }
    });
    setShowMessage(obj);

    return empty;
  }
  
  const handleFocus = (e: FocusEvent<HTMLInputElement>, keySpan: KeysFocusSpan, keyIcon: KeysFocusSVG) => {
    setOnFocus({ ...onFocus, [`${keySpan}`]: 'onFocusSpan', [`${keyIcon}`]: 'svgOnfocus'});
    e.target.classList.add('onFocusInput');
  }
 
  const handleBlur = (e: FocusEvent<HTMLInputElement>, key: KeysFocusSpan, keyIcon: KeysFocusSVG) => {
    if(!e.target.value) {
      setOnFocus({ ...onFocus, [`${key}`]: '',[`${keyIcon}`]: ''});
      e.target.classList.remove('onFocusInput');
    }

  }
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value) {
      setInputs({...inputs, [e.target.name]: parseFloat(e.target.value)});
    }
  }
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(checkIfInputIsEmpty()) {
      dispatchIMC(inputs);
      scroll.scrollTo(616, {duration: 1500, smooth: true});
    }
  }
 
  return (
    <Style.ContainerForm>
      <h2>Calcule seu IMC:</h2>

      <Style.Form onSubmit={handleSubmit} ref={refForm}>

        <Style.InputContainer>
          <label>
            <span className={onFocus.spanHeight}>Altura:</span>
            <input type="number"
              name='height'
              step='any'
              min={1}
              onFocus={(e) => handleFocus(e, 'spanHeight', 'svgHeight')}
              onBlur={(e) => handleBlur(e, 'spanHeight', 'svgHeight')}
              onInput={handleInput}
            />
            <GiBodyHeight className={onFocus.svgHeight}/>
          </label>
          {showMessage!.height && <p>Informe sua altura *</p>}
        </Style.InputContainer>

        <Style.InputContainer>
          <label>
            <span className={onFocus.spanWeight}>Peso:</span>

            <input
              type="number"
              name='weight'
              step='any'
              min={1}
              onFocus={(e) => handleFocus(e, 'spanWeight', 'svgWeight')}
              onBlur={(e) => handleBlur(e, 'spanWeight', 'svgWeight')}
              onInput={handleInput}
              />

            <GiWeightScale className={onFocus.svgWeight}/>
          </label>
          {showMessage!.weight && <p>Informe seu peso *</p>}
        </Style.InputContainer>

        <Style.ButtonsContainer>
          <button type="submit">
            <span>Confirmar</span>
          </button>
          <button type="reset" onClick={handleReset}>Cancelar</button>
        </Style.ButtonsContainer>
        
      </Style.Form>
    </Style.ContainerForm>
  )
}

export default Form
