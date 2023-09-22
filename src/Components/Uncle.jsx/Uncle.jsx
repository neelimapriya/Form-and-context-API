import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name={'marsad'} asset={asset}></Cousin>
                <Cousin name={'mayhak'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;