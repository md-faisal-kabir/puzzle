import React, { Component } from 'react';
import mountain from '../image/mountain.jpg'

class ImageSplit extends Component {
    state ={
        puzzleTiles:[],
        
    }

    splitter = () => {
        const canvas = this.refs.myCanvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.mountain;
        console.log(img.height);
        
        ctx.drawImage(img, 0, 0, 270, 270, 0, 0,120,120);
        ctx.drawImage(img, 270, 0, 270 , 270, 130, 0,120,120);
        ctx.drawImage(img, 540, 0, 270 , 270, 260, 0,120,120);
        ctx.drawImage(img, 810, 0, 270 , 270, 390, 0,120,120);
        ctx.drawImage(img, 0, 270, 270, 270, 0, 130,120,120);
        ctx.drawImage(img, 270, 270, 270 , 270, 130, 130,120,120);
        ctx.drawImage(img, 540, 270, 270 , 270, 260, 130,120,120);
        ctx.drawImage(img, 810, 270, 270 , 270, 390, 130,120,120);
        ctx.drawImage(img, 0, 540, 270, 270, 0, 260,120,120);
        ctx.drawImage(img, 270, 540, 270 , 270, 130, 260,120,120);
        ctx.drawImage(img, 540, 540, 270 , 270, 260, 260,120,120);
        ctx.drawImage(img, 810, 540, 270 , 270, 390, 260,120,120);
        let im = canvas.toDataURL();
        let a = document.createElement('a');
        a.href = im;
        a.download = "tile-1.png";
        document.body.appendChild(a);
        // a.click();
        document.body.removeChild(a);

        // ctx.drawImage(img, 500, 0, 500, 500, 210, 0,200,200);
        // ctx.drawImage(img, 0, 500, 500, 500, 0, 210 ,200,200);
        // ctx.drawImage(img, 500, 500, 500, 500, 210, 210 ,200,200);
                  // ctx.drawImage(img, 120, 0, 240, 480, 130, 0, 240, 480);
                
               
            }
          
        //   ctx.font = "40px Courier";
        //   ctx.fillText(this.props.text, 210, 75);


      



    render() { 
        return (
            <React.Fragment>
                <h1 className="text-center display-1"> Puzzle </h1>
                <div className="row">
                <div className="col-md-3 m-5">
                    <img ref="mountain" src = { mountain } alt = " " width="500" />
                    <button className ="btn btn-secondary mt-3" onClick = {this.splitter }> Split</button>
                </div>

                <div className="col-md-5 m-5">
                    <canvas ref="myCanvas" width="550" height="550"></canvas>
                </div>
                
            </div>

            </React.Fragment>

            
                
        

        );
    }

    // splitter= () => {
    //     const imageName = this.refs.mountain;
    //     const paintCanvas = this.refs.myCanvas;

    //     // if (paintCanvas.getContext){
    //     const paintContext = paintCanvas.getContext("2d");
    //     paintContext.drawImage(imageName, 0, 0, 60, 120, 0, 0, 60, 120);
    //     // paintContext.drawImage(imageName, 60, 0, 60, 120, 70, 0, 60, 120);?
    //     // }

    // }
}
 
export default ImageSplit;