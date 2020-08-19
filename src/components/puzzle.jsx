import React, { Component } from 'react';
import mountain from "../image/mountain.jpg"


class ImageSplit extends Component {
    state ={
        puzzleTiles:[],
        imageHeight: 716,
        imageWidth : 1080
        // imageUrl: "../image/mountain.jpg"
        
    }

    splitter = (tile) => {
        const canvas = this.refs.myCanvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.mountain;

        let tileWidth = parseInt(this.state.imageWidth / tile);
        let tileHeight = parseInt(this.state.imageHeight /tile);

        console.log(tileWidth);
        console.log(tileHeight);
        console.log(tile);
        ctx.clearRect(0,0,this.state.imageWidth,this.state.imageHeight);

        
        let count = 0;

        for (let y = 0, j = 0; count < tile; y=y+tileHeight, j= j+tileHeight/2 +10){
            let countTwo = 0;
            console.log("loop")
            for (let x = 0, i = 0; countTwo < tile; x=x+tileWidth,i=i+tileWidth/2 +10){
                ctx.drawImage(img, x,  y,  tileWidth, tileHeight, i, j, tileWidth/2, tileHeight/2);
                console.log(x, y, i, j);
                countTwo++;
            }
            count++;
        }



        // ctx.drawImage(img,         0,          0,  tileWidth, tileHeight,                     0,                0, tileWidth/2, tileHeight/2);
        // ctx.drawImage(img, tileWidth,          0,  tileWidth, tileHeight,       tileWidth/2 +10,                0, tileWidth/2, tileHeight/2);
        // ctx.drawImage(img,         0, tileHeight,  tileWidth, tileHeight,                     0, tileHeight/2 +10, tileWidth/2, tileHeight/2);
        // ctx.drawImage(img, tileWidth, tileHeight,  tileWidth, tileHeight,       tileWidth/2 +10, tileHeight/2 +10, tileWidth/2, tileHeight/2); 
        // ctx.drawImage(img, 540, 0, tileWidth, tileHeight ,       2*tileWidth/2 +20, 0, tileWidth/2, tileHeight/2);
        // ctx.drawImage(img, 810, 0, tileWidth, tileHeight ,       3*tileWidth/2 +30, 0, tileWidth/2, tileHeight/2);
        

        // ctx.drawImage(img, 0, 270, 270, 270, 0, 130, 120, 120);
        // ctx.drawImage(img, 270, 270, 270 , 270, 390, 130, 120, 120);
        // ctx.drawImage(img, 540, 270, 270 , 270, 260, 130, 120, 120);
        // ctx.drawImage(img, 810, 270, 270 , 270, 130, 130, 120, 120);

        // ctx.drawImage(img, 0, 540, 270, 270, 260, 260, 120, 120);
        // ctx.drawImage(img, 270, 540, 270 , 270, 390, 260,120,120);
        // ctx.drawImage(img, 540, 540, 270 , 270, 0, 260,120,120);
        // ctx.drawImage(img, 810, 540, 270 , 270, 130, 260,120,120);
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
                     
      



    render() { 
        return (
            <React.Fragment>
                <h1 className="text-center display-1"> Puzzle </h1>
                <div className="row">
                    <div className="col-md-2 ml-2"></div>
                <div className="col-md-3 m-5">
                    <img ref="mountain" src = { mountain } alt = " " width="500" />
                    <button className ="btn btn-secondary m-3" onClick = {( )=>this.splitter(4) }> 4x4</button>
                    <button className ="btn btn-primary m-3"   onClick = {( )=>this.splitter(8) }> 8x8</button>
                    <button className ="btn btn-warning m-3"   onClick = {( )=>this.splitter(12)}> 12x12</button>
                </div>

                <div className="col-md-3 m-5">
                    <canvas ref="myCanvas" width="1000" height="550"></canvas>
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