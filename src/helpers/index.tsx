import React from 'react'
import { IDataInterface } from '../types'

export function CheckFieldTypeHandler(field: string, item: IDataInterface): React.ReactNode{
    switch(field){
        case 'id': return (
            <div className='contentItemData' key={item[field]}>
                <h2>{`${field}: ${item[field]}`}</h2>
            </div>
        );

        case 'email': return (
            <div className='contentItemData' key={item[field]}>
                <fieldset className='contentItemRow'>
                    <label htmlFor='email'>{field}:</label>
                    <input 
                        id='email' 
                        type='email' 
                        value={`${item[field]}`} 
                        readOnly />
                </fieldset>
            </div>
        );

        default: return (
            <div className='contentItemData' key={item[field]}>
            <fieldset className='contentItemRow'>
                <label htmlFor='text'>{field}:</label>
                <input 
                    id='text' 
                    type='text' 
                    value={`${item[field]}`} 
                    readOnly />
            </fieldset>
        </div>
        ) 
    }
}

export const checkArrayDataHandler = (data: any) => {
    switch(typeof data){
        case 'string': return <input id='text' type='text' value={data} readOnly />
        case 'number': return <input type='number' value={data} readOnly />
        case 'boolean': return <input type='radio' value={data ? 'true' : 'false'} />
        default: return;
    }
}

export const checkObjectDataHandler = (field: string, object: IDataInterface) => {
    switch (typeof object[field]){
        case 'string': return (
            <div className='contentItemData' key={object[field]}>
                <fieldset className='contentItemRow'>
                    <label htmlFor={field}>{field}:</label>
                    {
                        object[field].length < 20 ? <input id={field} type='text' value={object[field]} readOnly /> : <textarea rows={6} cols={35} id={field} value={object[field]} readOnly />
                    }
                </fieldset>
            </div>
        )
        case 'boolean': return (
            <div className='contentItemData' key={object[field]}>
                <fieldset className='contentItemRow'>
                    <label htmlFor={field}>{field}:</label>
                    <input id={field} type='radio' value={object[field] ? 'true' : 'false'} />
                </fieldset>
            </div>
        )
        case 'number': return (
            <div className='contentItemData' key={object[field]}>
                <fieldset className='contentItemRow'>
                    <label htmlFor={field}>{field}:</label>
                    <input id={field} type='number' value={object[field]} readOnly />
                </fieldset>
            </div>
        );
        default: return
    }
}