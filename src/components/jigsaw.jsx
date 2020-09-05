import React, { Component } from "react";
import mountain from "../image/mountain.jpg";
import "../puzzle.css";

class Jigsaw extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  state = {
    pieces: [],
    shuffled: [],
    solved: [],
    fullImg: " ",
  };

  componentDidMount() {
    const pieces = this.props.tiles.map((p, i) => ({
      img: p,
      order: i,
      board: "shuffled",
    }));
    // console.log(this.props.tiles)

    this.setState({
      pieces,
      shuffled: this.shufflePieces(pieces),
      solved: [...Array(pieces.length)],
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.tiles.length !== prevProps.tiles.length) {
      const pieces = this.props.tiles.map((p, i) => ({
        img: p,
        order: i,
        board: "shuffled",
      }));
      const fullImg = this.props.fullImg;
      //    console.log(this.props.tiles)

      this.setState({
        pieces,
        shuffled: this.shufflePieces(pieces),
        solved: [...Array(pieces.length)],
        fullImg: fullImg,
      });
    }
  }

  handleDrop(e, index, targetName) {
    let target = this.state[targetName];
    if (target[index]) return;

    const pieceOrder = e.dataTransfer.getData("text");
    const pieceData = this.state.pieces.find((p) => p.order === +pieceOrder);
    const origin = this.state[pieceData.board];

    if (targetName === pieceData.board) target = origin;

    origin[origin.indexOf(pieceData)] = undefined;
    target[index] = pieceData;
    pieceData.board = targetName;

    this.setState({
      [pieceData.board]: origin,
      [targetName]: target,
    });
  }

  handleDragStart(e, order) {
    const dt = e.dataTransfer;
    dt.setData("text/plain", order);
    dt.effectAllowed = "move";
    console.log(dt);
  }

  shufflePieces(pieces) {
    const shuffled = [...pieces];
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = tmp;
    }

    //  console.log(shuffled);

    return shuffled;
  }

  renderPieceContainer(piece, index, boardName, width, height) {
    return (
      <li
        key={index}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => this.handleDrop(e, index, boardName)}
        style ={{width: width-0.5, height: height-0.5}}
      >
        {piece && (
          <img
            draggable
            onDragStart={(e) => this.handleDragStart(e, piece.order)}
            src={piece.img}
            width = {width}
            height = {height}
          />
        )}
      </li>
    );
  }

  render() {
    let styleSolved = {
      backgroundImage: `url(${this.state.fullImg})`,
      backgroundSize: "100% 99%",
      width: String(this.props.tileWidth * this.props.tile) + "px",

      // height: String(this.props.tileHeight * this.props.tile)+"px",
      // margin: '20px auto',
      // listStyleType: 'none',
      // padding: '0',
      // fontSize: '0',
      // border: '1px solid #DDD',
      // borderWidth: '1px 0 0 1px'
    };

    const tileW = this.props.tileWidth;
    const tileH = this.props.tileHeight;
    // let styleShuffled = {
    //     width: String(this.props.tileWidth * this.props.tile)+"px",
    //     height: String(this.props.tileHeight * this.props.tile)+"px",
    // };

    return (
      <React.Fragment>
        <div className="row jigsaw">
          <div className="col-md-6 p-5">
            <ul className="jigsaw_shuffled-board">
              {this.state.shuffled.map((piece, i) =>
                this.renderPieceContainer(piece, i, "shuffled", tileW, tileH)
              )}
            </ul>
          </div>
          <div className="col-md-6 p-5">
            <ol className="jigsaw_solved-board" style={styleSolved}>
              {this.state.solved.map((piece, i) =>
                this.renderPieceContainer(piece, i, "solved", tileW, tileH)
              )}
            </ol>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jigsaw;
