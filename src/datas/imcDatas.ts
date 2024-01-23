import { FaRegFaceSadTear } from "react-icons/fa6";
import { BiHappyHeartEyes, BiConfused  } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GiDeadHead } from "react-icons/gi";
import { TbMoodSuprised } from "react-icons/tb";
import { IconType } from "react-icons";

export interface IIMC {
    svg?: IconType,
    imc: string,
    status: string,
    color: string,
}

export const datas:IIMC[]= [
    {svg: FaRegFaceSadTear, imc: 'Abaixo de 18,5', status: 'Abaixo do peso ideal', color: '#fed7aa'},
    {svg: BiHappyHeartEyes , imc: 'Entre 18.6 e 24.9', status: 'Peso ideal', color: '#4ade80'},
    {svg: HiOutlineEmojiHappy, imc: 'Entre 25.0 e 29.9', status: 'Levemente acima do peso', color: '#fecaca'},
    {svg: BiConfused, imc: 'Entre 30.0 e 34.9', status: 'Obesidade grau I', color: '#f87171'},
    {svg: TbMoodSuprised, imc: 'Entre 35.0 e 39.9', status: 'Obesidade grau II (Severa)', color: '#ef4444'},
    {svg: GiDeadHead, imc: 'Acima de 40', status: 'Obesidade grau III (Mórbida)', color: '#ef4444'},
]
