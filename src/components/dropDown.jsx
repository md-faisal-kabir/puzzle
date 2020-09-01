import React, { Component } from 'react';
import "../App.css"

class Dropdown extends Component {
    constructor(props) {
        super();
        this.props = props;
        let width = this.props.tileWidth * this.props.tile;
       
        
    }

    
    
    
   

    renderPieceContainer(p) {
        return (
            <li>
                <img src={p}/>
            </li>
        )
    }

    render() { 

        let width = this.props.tileWidth * this.props.tile + 60;

        return (
            <div className="row m-5" id="jigsaw">
                
                <ul style={{width: width}}>
                    {
                        this.props.tiles.map(piece =>
                        this.renderPieceContainer(piece))
                    }
                </ul>

                
            </div>
            
        );
    }
}
 
export default Dropdown;