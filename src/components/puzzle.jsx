import React, { Component } from "react";
import mountain from "../image/mountain.jpg";
import Jigsaw from "./jigsaw";


class ImageSplit extends Component {
  state = {
    puzzleTiles: [],
    tileWidth: 0,
    tileHeight:0,
    tile: 0,
    fullImg: " "

  };

  splitter = (tile) => {
    const canvas = this.refs.myCanvas;   
    const img = this.refs.mountain;
   
    // getting image natural size
    let imageWidth = img.naturalWidth;
    let imageHeight = img.naturalHeight;
    // getting tile size
    let tileWidth = parseInt(imageWidth / tile);
    let tileHeight = parseInt(imageHeight / tile);
    // getting canvas size
    let canvasWidth = tileWidth/2;
    let canvasHeight = tileHeight / 2;
    
    this.setState({ tileWidth: canvasWidth });
    this.setState({ tileHeight: canvasHeight });
    this.setState({ tile: tile});

    canvas.width = String(canvasWidth);
    canvas.height = String (canvasHeight);
    const ctx = canvas.getContext("2d");


    let p = [];
    for (let j = 0; j < tile; j++){
      for (let i =0; i < tile; i++){

        ctx.clearRect(0, 0, imageWidth, imageHeight);
        ctx.drawImage(img, i*tileWidth, j*tileHeight, tileWidth, tileHeight, 0, 0, canvasWidth, canvasHeight);
        p.push(canvas.toDataURL());
        

      }
    }

    console.log(p.length);
    this.setState({ puzzleTiles: [...p]});
    console.log(this.state.puzzleTiles.length);
    
    canvas.width = String( tile*canvasWidth );
    canvas.height = String( tile*canvasHeight );
    const dtx = canvas.getContext( "2d");
    dtx.drawImage( img, 0, 0, tile * tileWidth, tile * tileHeight, 0, 0, tile * canvasWidth, tile * canvasHeight);
    
    this.setState({ fullImg: canvas.toDataURL()});
   
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center" style = {this.customStyle}> Puzzle </h1>
        <div className="row m-3">
          <div className="col-md-4"></div>
          <div ref="imagePlace" className="col-md-4 ">
            <img ref="mountain" src={mountain} className="img-fluid" alt=" " width="300" />
            <button className="btn btn-outline-success m-3"   onClick={() => this.splitter(2)}  > - 2x2 - </button>
            <button className="btn btn-outline-secondary m-3" onClick={() => this.splitter(4)}  > - 4x4 - </button>
            <button className="btn btn-outline-primary m-3"   onClick={() => this.splitter(8)}  > - 8x8 - </button>
            <button className="btn btn-outline-warning m-3"   onClick={() => this.splitter(12)} > -12x12- </button>
          </div>
          <canvas ref="myCanvas" className="d-none"></canvas>

        </div>

        <Jigsaw tiles={this.state.puzzleTiles} tileWidth={this.state.tileWidth} tileHeight={this.state.tileHeight} tile={this.state.tile} fullImg={this.state.fullImg}/>
        
      </div>
    );
  }

}

export default ImageSplit;
