import React from 'react';
import ComponentB from './Component_B';
import ComponentC from './Component_C';

function componentA() {
    return (
        <div>
            <ComponentB/>
            <br /><br />
            <ComponentC/>
        </div>
    )
}

export default componentA;
