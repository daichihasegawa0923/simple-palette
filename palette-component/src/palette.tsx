import React, { useState } from 'react';

export interface PaletteProps{
    currentColor?: string;
    onChangeColor?: (color: string) => void;
}

/**
 * @description Simple Palette
 * @param props.currentColor current choose color
 * @param props.onChangeColor call when select any color on this component
 */
export const Palette: React.FC<PaletteProps> = ({currentColor, onChangeColor}: PaletteProps) => {
    const [isOpenPalette, setIsOpenPalette] = useState<boolean>(false);
    const [currentSelectedColor, setCurrentSelectedColor] = useState<string>(currentColor ?? '#000000');
    const colorNums  = ['0', '1', '2','3', '4', '5','6', '7', '8','9', 'A', 'B','C', 'D', 'E','F'];
    const buttonStyle = {
        width: '12px',
        height: '12px',
        margin: '0px',
        border: 'none',
        padding: '0px'};
    const buttons = (currentColor='#000000')=>{
        const buttons: JSX.Element[] = [];
        
        const pushButton = (colorStr: string) => {
            buttons.push( 
            <button
                 style={
                {
                    ...buttonStyle,
                    backgroundColor: colorStr,
                }}
                onClick={(e)=>{
                    if(onChangeColor)onChangeColor(colorStr)
                    setCurrentSelectedColor(colorStr);
                }}
                 />
                );
        }
        for (let i = colorNums.length - 1; i >= 0; i--){
            pushButton(`#${colorNums[i]}${colorNums[i]}${colorNums[i]}${colorNums[i]}${colorNums[i]}${colorNums[i]}`);
            pushButton(`#FF${colorNums[i]}${colorNums[i]}${colorNums[i]}${colorNums[i]}`);
            pushButton(`#FF${colorNums[i]}${colorNums[i]}FF`);
            pushButton(`#${colorNums[i]}${colorNums[i]}${colorNums[i]}${colorNums[i]}FF`);
            pushButton(`#${colorNums[i]}${colorNums[i]}FFFF`);
            pushButton(`#${colorNums[i]}${colorNums[i]}FF${colorNums[i]}${colorNums[i]}`);
            pushButton(`#FFFF${colorNums[i]}${colorNums[i]}`);
            pushButton(`#FF66${colorNums[i]}${colorNums[i]}`);
            pushButton(`#FF${colorNums[i]}${colorNums[i]}66`);
            pushButton(`#${colorNums[i]}${colorNums[i]}FF66`);
            pushButton(`#${colorNums[i]}66${colorNums[i]}FF`);
            pushButton(`#66${colorNums[i]}${colorNums[i]}FF`);
            pushButton(`#66FF${colorNums[i]}${colorNums[i]}`);
            buttons.push(<br />);
        }
        return buttons;
    }

    return(
        <>
        <button onClick={()=>{setIsOpenPalette(!isOpenPalette)}} 
        style={{
            width: '24px',
            height: '24px',
            borderRadius: '12px',
            backgroundColor: currentSelectedColor,
            border: 'solid 1px #000',
        }}/>
        {isOpenPalette && (
        <div style={{
            lineHeight: '0px',
            position: 'absolute'}}>
            <div style={{margin: '0'}}>
                {buttons(currentColor)}
            </div>
        </div>)}
        </>
    );
}