import React  from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction'

function ComponentB({simpleAction}) {

    const handleAction = (e) => {
        simpleAction(e.target.value)
    }
    
    return (
        <div>
            Component B
            <p>Type Here</p>
            <input type="text" onChange={(e) => handleAction(e)}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    simpleAction: (e) => dispatch(simpleAction(e))
})
export default connect(null, mapDispatchToProps) (ComponentB);
