import React from "react";
import {reduxForm} from 'redux-form';

const Sentence = (props) => {
    const {sentence, startNew} = props
    return (
        <div>
            <p> {sentence} </p>
            <button className="ui button green"
                onClick={startNew}>
                Start new game
            </button>
        </div>
    );
}

export default reduxForm({form: 'sentence-game', destroyOnUnmount: true, forceUnregisterOnUnmount: true})(Sentence)
