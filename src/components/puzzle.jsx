import React, { Component } from "react";
import mountain from "../image/mountain.jpg";
import DropDown from "./dropDown";

class ImageSplit extends Component {
  state = {
    puzzleTiles: [],
    tileWidth: 0,
    tile: 0,

    // imageHeight: 716,
    // imageWidth : 1080
    // imageUrl: "../image/mountain.jpg"
  };

  splitter = (tile) => {
    const canvas = this.refs.myCanvas;
    const imag = this.refs.imagePlace;
    
    const img = this.refs.mountain;
   

    let imageWidth = img.naturalWidth;
    let imageHeight = img.naturalHeight;

    // let tileWidth = parseInt(this.state.imageWidth / tile);
    // let tileHeight = parseInt(this.state.imageHeight /tile);
    let tileWidth = parseInt(imageWidth / tile);
    let tileHeight = parseInt(imageHeight / tile);

    

    let canvasWidth = tileWidth/2;
    let canvasHeight = tileHeight / 2;
    
    this.setState({ tileWidth: canvasWidth });
    this.setState({ tile: tile});

    canvas.width = String(canvasWidth);
    canvas.height = String (canvasHeight);
    const ctx = canvas.getContext("2d");

    // console.log(tileWidth);
    // console.log(tileHeight);
    // console.log(tile);
    // ctx.clearRect(0,0,this.state.imageWidth,this.state.imageHeight);
    let p = [];

    for (let j = 0; j < tile; j++){
        for (let i =0; i < tile; i++){
        ctx.clearRect(0, 0, imageWidth, imageHeight);
        // imag.className ="d-none";
        console.log(canvas.height, canvas.width);
        ctx.drawImage(img, i*tileWidth, j*tileHeight, tileWidth, tileHeight, 0, 0, canvasWidth, canvasHeight);
        p.push(canvas.toDataURL());
        // this.setState({puzzleTiles: this.state.puzzleTiles.concat(canvas.toDataURL())});
        // console.log(p.length);
    }
    }

    this.setState({ puzzleTiles: p });
    console.log(this.state.puzzleTiles.length);


    
    

    // let count = 0;

    // for (
    //   let y = 0, j = 0;
    //   count < tile;
    //   y = y + tileHeight, j = j + tileHeight / 2 + 10
    // ) {
    //   let countTwo = 0;
    //   console.log("loop");
    //   for (
    //     let x = 0, i = 0;
    //     countTwo < tile;
    //     x = x + tileWidth, i = i + tileWidth / 2 + 10
    //   ) {
    //     ctx.drawImage(
    //       img,
    //       x,
    //       y,
    //       tileWidth,
    //       tileHeight,
    //       i,
    //       j,
    //       tileWidth / 2,
    //       tileHeight / 2
    //     );
    //     console.log(x, y, i, j);
    //     countTwo++;
    //   }
    //   count++;
    // }

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
    // let im = canvas.toDataURL();
    // let a = document.createElement("a");
    // a.href = im;
    // a.download = "tile-1.png";
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);

    // ctx.drawImage(img, 500, 0, 500, 500, 210, 0,200,200);
    // ctx.drawImage(img, 0, 500, 500, 500, 0, 210 ,200,200);
    // ctx.drawImage(img, 500, 500, 500, 500, 210, 210 ,200,200);
    // ctx.drawImage(img, 120, 0, 240, 480, 130, 0, 240, 480);
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center" style = {this.customStyle}> Puzzle </h1>
        <div className="row">
          <div className="col-md-2 ml-2"></div>
          <div ref="imagePlace" className="col-md-3 m-5 ">
            <img ref="mountain" src={mountain} alt=" " width="500" />
            { }
            <button
              className="btn btn-outline-success m-3"
              onClick={() => this.splitter(2)}
            >
              {" "}
              -2x2-
            </button>
            <button
              className="btn btn-outline-secondary m-3"
              onClick={() => this.splitter(4)}
            >
              {" "}
              -4x4-
            </button>
            <button
              className="btn btn-outline-primary m-3"
              onClick={() => this.splitter(8)}
            >
              {" "}
              -8x8-
            </button>
            <button
              className="btn btn-outline-warning m-3"
              onClick={() => this.splitter(12)}
            >
              {" "}
              12x12
            </button>
          </div>

          <div className="col-md-3 m-5 d-none">
            <canvas ref="myCanvas"></canvas>
          </div>
        </div>

        <DropDown tiles={this.state.puzzleTiles} tileWidth={this.state.tileWidth} tile={this.state.tile}/>
        
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
