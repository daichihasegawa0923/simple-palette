import React, { useState } from 'react';
import styled from 'styled-components'

export interface ColumnDefinition{
    propName: string;
    displayName: string;
    isInputType?: boolean;
}

export interface SimpleTableProps{
    accessors: ColumnDefinition[];
    data: any[];
    children?: React.ReactNode;
}

export interface SimpleTableStyleProps {
    borderWidth?: number;
}

export const SimpleTable = ({accessors,data,children}: SimpleTableProps) => {
    const [inputData, setInputData] = useState(data);
    const sort = (propName: string, isAscending: boolean) => {
        inputData.sort((d1,d2)=>{
            const judge = isAscending ? d1[propName] < d2[propName] : d1[propName] > d2[propName];
            if(judge){
                return -1;
            } 
            return 1
        });
        setInputData([...inputData]);
    }

    if(accessors.length === 0 || data.length === 0 ){
        if (children) return (children);
        return(<>no data</>);
    }

    return(
    <>
    <table>
        <thead>
            {accessors.map(accsessor => (<td>
                {accsessor.displayName}
                <button style = {{border: 'none', backgroundColor: 'transparent'}} onClick={()=>{sort(accsessor.propName, true)}}>
                    ↓
                </button>
                <button style = {{border: 'none', backgroundColor: 'transparent'}} onClick={()=>{sort(accsessor.propName, false)}}>
                    ↑
                </button>
            </td>))}
        </thead>
        {inputData.map(d =>(
        <tr>
            {
            accessors.map(accessor => {
                return (<td>{accessor.isInputType ?(<input value={d[accessor.propName]}/>) : d[accessor.propName]}</td>);
            } )
            }
        </tr>))}
    </table>
    </>);
}