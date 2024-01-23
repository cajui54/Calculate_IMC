export type OnFocusSpan = 'onFocusSpan' | '';
export type OnFocusSVGIcon = 'svgOnfocus' | '';

export interface IFocus {
  spanHeight: OnFocusSpan,
  spanWeight: OnFocusSpan,
  svgHeight: OnFocusSVGIcon,
  svgWeight: OnFocusSVGIcon,
}
export const defaultFocus: IFocus =  {
    spanHeight: '',
    spanWeight: '',
    svgHeight: '',
    svgWeight: '',
}

export interface IMessageError {
    height?: boolean;
    weight?: boolean;
}

export interface IInput {
    height: number | null,
    weight: number | null,
}