import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from '../validate';
import RenderField from '../RenderField';

const What = props => {
    const {handleSubmit, previousPage} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="what" type="text"
                component={RenderField}
                label="What?"/>
            <div>
                <button type="button" className="ui button secondary"
                    onClick={previousPage}>
                    Previous
                </button>
                <button className="ui button primary" type="submit">
                    Next
                </button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'sentence-game', destroyOnUnmount: false, forceUnregisterOnUnmount: true, validate})(What);
