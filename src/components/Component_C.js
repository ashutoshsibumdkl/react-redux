import React from 'react';
import { connect } from 'react-redux';

function ComponentC({result}) {

    return (
        <div>
            <p>Component C</p>
            <p>Update above text field to make changes.</p>
            <p>Result: {result}</p>
        </div>
    )
}
const mapStateToProps = state => ({
    result: state.simpleReducer.result
})

export default connect(mapStateToProps, null) (ComponentC);
