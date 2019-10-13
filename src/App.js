import React, {Component} from 'react'
import Who from './Questions/Who';
import What from './Questions/What';
import When from './Questions/When';
import Where from './Questions/Where';
import Sentence from './Sentence';

class App extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1,
            sentence: ""
        }
    }
    nextPage() {
        this.setState({
            page: this.state.page + 1
        })
    }

    previousPage() {
        this.setState({
            page: this.state.page - 1
        })
    }
    onSubmit = (formValues) => {
        this.setState({
            sentence: formValues.who + " " + formValues.what + " " + formValues.where + " " + formValues.when
        })
        this.nextPage();
    }
    startNew = () => {
        this.setState({page: 1, sentence: ""})
    }
    render() {
        const {page} = this.state
        return (
            <div id="flexContainer" >
                <div> {
                    page === 1 && <Who onSubmit={
                        this.nextPage
                    }/>
                }
                    {
                    page === 2 && (
                        <What previousPage={
                                this.previousPage
                            }
                            onSubmit={
                                this.nextPage
                            }/>
                    )
                }
                    {
                    page === 3 && (
                        <When previousPage={
                                this.previousPage
                            }
                            onSubmit={
                                this.nextPage
                            }/>
                    )
                }
                    {
                    page === 4 && (
                        <Where previousPage={
                                this.previousPage
                            }
                            onSubmit={
                                this.onSubmit
                            }/>
                    )
                }
                    {
                    page === 5 && (
                        <Sentence sentence={
                                this.state.sentence
                            }
                            startNew={
                                this.startNew
                            }/>
                    )
                }</div>
            </div>
        )
    }
}


export default App
