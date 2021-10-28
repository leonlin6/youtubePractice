import React from 'react';

class SearchBar extends React.Component{

    state = {term:''}

    onInputChange = (event) => {
        this.setState({term: event.target.value});

    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
        this.props.onBarSubmit(this.state.term);

        //Todo: make sure we call callback from parent component
    }

    render(){
        return (
            <div>
                <div className="search-bar ui segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Video Search</label>
                            <input 
                                type="text" 
                                value={this.state.term}
                                onChange={this.onInputChange}
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
        );

        };
}

export default SearchBar;