import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
        // tags : ['tag1', 'tag2', 'tag3'],
        tags : []
        
    }
  

    formatCount() {
        const { count} = this.state;
        return count === 0 ? "Zero" : count;
    }

    renderEmpty(){
        
        if (this.state.tags.length === 0) return <p>No tags to show</p>;
        return <ul>{ this.state.tags.map( tag =><li key={ tag }> { tag } </li>)}</ul>;
       
    }

    handleIncreament = () =>{
        // console.log("Increment CLicked");
        this.setState ({ count: this.state.count + 1})
        
    }
    
    render() { 
     
        return (
        <React.Fragment>
            <h1>Hello World</h1>
            
            <span style={ { fontSize: 20}} className={this.changeBadge()}> { this.formatCount() }</span>
            <button 
                onClick = { this.handleIncreament } 
                className="btn btn-secondary"
                >
                Increment
            </button>
            {this.state.tags.length === 0 && <p>Please add Tags!!!</p>}
            { this.renderEmpty() }
            

        </React.Fragment>
        
        )
    }
    

    changeBadge() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;