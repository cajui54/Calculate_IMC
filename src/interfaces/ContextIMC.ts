import { ReactNode } from "react";
import { IIMC } from "../datas/imcDatas";

export interface IPropsContext {
    children: ReactNode;
}
export interface Actions {
    height: number,
    weight: number,
}
export type State = {imc: number, info: IIMC} | null;

export interface IContext{
    datas?: State | null,
    dispatchIMC?: React.Dispatch<Actions>,  
}