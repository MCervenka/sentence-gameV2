import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import * as actions from './actions';

const App = (props) => {
    const {destroyValues, postValue, form} = props
    const [term, setTerm] = useState("");
    const [page, setPage] = useState(1);
    const nextPage = (event) => {
        event.preventDefault();
        if (form[page] !== term) {postValue({value: term, page: page})};
        setPage(page + 1);
    }
    useEffect(() => {
        if (form[page] === undefined) {
            setTerm("")
        } else {
            setTerm(form[page])
        }
    }, [form, page]);
    const previousPage = () => {
        if (form[page] !== term) {postValue({value: term, page: page})};
        setPage(page - 1);
    }
    const startNew = () => {
        setPage(1);
        destroyValues();
    }
    const currentLabel = ["Who", "What", "When", "Where"];

    return (
        <div id="flexContainer">
            {
            page !== 5 && <form onSubmit={nextPage}>
                <div className='"ui input focus"'>
                    <label>{
                        currentLabel[page - 1]
                    }</label>
                    <div>
                        <input type="text"
                            placeholder={
                                currentLabel[page - 1]+"?"
                            }
                            value={term}
                            onChange={
                                event => setTerm(event.target.value)
                            }
                            required/>
                    </div>
                </div>
                <div> {
                    page > 1 && <button type="button" className="ui button secondary"
                        onClick={previousPage}>
                        Previous
                    </button>
                }
                    <button className="ui button primary" type="submit">
                        Next
                    </button>
                 </div>
            </form>
        }
            {
            page === 5 && <div>
                <p> {
                    form[1] + " " + form[2] + " " + form[4] + " " + form[3]
                } </p>
                <button className="ui button green" type="button"
                    onClick={startNew}>
                    Start new game
                </button>
            </div>
        } </div>
    )
}

const mapStateToProps = ({form}) => {
    return {form};
};

export default connect(mapStateToProps, actions)(App);
