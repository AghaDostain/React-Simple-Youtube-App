import React, { Component } from 'react'

// class base component
class SearchBar extends Component {
    constructor(props){
        super(props);
        
        this.state = { term : ''};
    }
    render () {
        //onChange={event => this.setState({term:event.target.value})}
        //return <input onChange={this.onInputChange}/>;
        return (
        <div className="search-bar ">
            <input onChange={event => this.onInputChange(event.target.value)} />            
        </div>
        );
    }
    onInputChange (term){
        this.setState({term});
        this.props.onSearchTermChange(this.state.term);
    }
} 

////Functional base Component
//const SearchBar =  () =>{
//    return <input />; //React.creatElement
//}

export default SearchBar ;