import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from '../validate';
import RenderField from '../RenderField';

const Who = props => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="who" type="text"
                component={RenderField}
                label="Who?"/>
            <div>
                <button className="ui button primary" type="submit">
                    Next
                </button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'sentence-game', destroyOnUnmount: false, forceUnregisterOnUnmount: true, validate})(Who);
