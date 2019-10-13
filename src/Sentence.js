import React from "react";

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

export default Sentence;
