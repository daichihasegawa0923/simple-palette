import React, { useState } from 'react';
import styled from 'styled-components'

export interface ColumnDefinition
{
    propName: string;
    displayName: string;
    isInputType?: boolean;
}

export interface SimpleTableProps
{
    accessors: ColumnDefinition[];
    data: any[];
    children?: React.ReactNode;
    tableStyle?: SimpleTableStyleProps;
    onChange?: (data: any[]) => void;
}

export interface SimpleTableStyleProps
{
    borderWidth?: number;
    borderColor?: string;
}

const Table = styled.table<SimpleTableStyleProps>`
border: solid ${ props => props.borderWidth }px ${ props => props.borderColor };
border-collapse: collapse;
td{
    border: solid ${ props => props.borderWidth }px ${ props => props.borderColor }
}
`;

export const SimpleTable = ({ accessors, data, children, tableStyle, onChange }: SimpleTableProps) =>
{
    const [ inputData, setInputData ] = useState(data);
    const sort = (propName: string, isAscending: boolean) =>
    {
        inputData.sort((d1: { [ x: string ]: number; }, d2: { [ x: string ]: number; }) =>
        {
            const judge = isAscending ? d1[ propName ] < d2[ propName ] : d1[ propName ] > d2[ propName ];
            if (judge)
            {
                return -1;
            }
            return 1
        });
        setInputData([ ...inputData ]);
    }

    const onChangeInputField = (propName: string, index: number, value: any) =>
    {
        const changedData = { ...inputData[ index ], [ propName ]: value };
        let changedArray = inputData;
        changedArray[ index ] = changedData;
        setInputData([ ...changedArray ]);
        if (onChange) onChange(changedArray);

    }

    if (accessors.length === 0 || data.length === 0)
    {
        if (children) return (children);
        return (<>no data</>);
    }

    return (
        <>
            <Table { ...tableStyle }>
                <thead>
                    { accessors.map(accsessor => (
                        <td>
                            { accsessor.displayName }
                            <button style={ { border: 'none', backgroundColor: 'transparent' } } onClick={ () => { sort(accsessor.propName, true) } }>
                                ↓
                            </button>
                            <button style={ { border: 'none', backgroundColor: 'transparent' } } onClick={ () => { sort(accsessor.propName, false) } }>
                                ↑
                            </button>
                        </td>)) }
                </thead>
                { inputData.map((d, index) => (
                    <tr>
                        {
                            accessors.map(accessor =>
                            {
                                return (Object.keys(d).includes(accessor.propName)) && (<td>{ accessor.isInputType ? (
                                    <input
                                        style={ { border: 'none' } }
                                        value={ d[ accessor.propName ] }
                                        onChange={ (e) => { onChangeInputField(accessor.propName, index, e.target.value) } } />) : d[ accessor.propName ] }</td>);
                            })
                        }
                    </tr>)) }
            </Table>
        </>);
}