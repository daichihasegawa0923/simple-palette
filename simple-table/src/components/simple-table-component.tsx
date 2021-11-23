import React from 'react';

export interface Accessor{
    propName: string;
    displayName: string;
}

export interface SimpleTableProps{
    accessors: Accessor[];
    data: any[];
    children?: React.ReactNode;
}

export const SimpleTable = ({accessors,data,children}: SimpleTableProps) => {

    if(accessors.length === 0 || data.length === 0 ){
        if (children) return (children);
        return(<></>);
    }

    return(
    <>
    <table>
        <thead>
            {accessors.map(accsessor => (<td>{accsessor.displayName}</td>))}
        </thead>
        {data.map(d =>(
        <tr>
            {accessors.map(accessor => (<td>{d[accessor.propName]}</td>))}
        </tr>))}
    </table>
    </>);
}