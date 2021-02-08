import React, { Fragment } from 'react';
import Form from './ItemFormOne';
import Items from './Items';


export default function ItemDashboard() {
    return (
        <Fragment>
            <Form />
            <Items />   
        </Fragment>
    )
}