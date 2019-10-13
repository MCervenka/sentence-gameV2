import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from '../validate';
import RenderField from '../RenderField';

const Where = props => {
    const {handleSubmit, previousPage} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="where" type="text"
                component={RenderField}
                label="Where?"/>
            <div>
                <button type="button" className="ui button secondary"
                    onClick={previousPage}>
                    Previous
                </button>
                <button className="ui button green" type="submit">
                    Submit
                </button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'sentence-game', destroyOnUnmount: true, forceUnregisterOnUnmount: true, validate})(Where)
