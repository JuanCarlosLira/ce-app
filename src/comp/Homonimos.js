import React from "react";
import Header from './Header'
//import "./Drag.css";

class Homonimos extends React.Component {
  state = {
    imgs: [
      {
        name: "a1",
        category: "bank",
        dir:
          "https://cdn0.iconfinder.com/data/icons/education-70/512/Examtest-512.png"
      },
      {
        name: "a2",
        category: "bank",
        dir:
          "https://cdn0.iconfinder.com/data/icons/education-70/512/Examtest-512.png"
      },
      {
        name: "b1",
        category: "bank",
        dir:
          "https://cdn0.iconfinder.com/data/icons/education-70/512/Examtest-512.png"
      },
      {
        name: "b2",
        category: "bank",
        dir:
          "https://cdn0.iconfinder.com/data/icons/education-70/512/Examtest-512.png"
      }
    ]
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, id) => {
    //console.log("dragStart: ", id);
    ev.dataTransfer.setData("id", id);
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let imgs = this.state.imgs.filter(imgs => {
      if (imgs.name === id) {
        imgs.category = cat;
      }
      return imgs;
    });
    this.setState({ ...this.state, imgs });
  };

  render() {
    var imgs = {
      bank: [],
      a1: [],
      a2: [],
      b1: [],
      b2: []
    };

    this.state.imgs.forEach(i => {
      imgs[i.category].push(
        <div
          key={i.name}
          onDragStart={e => this.onDragStart(e, i.name)}
          draggable
          className="draggable"
          style={{
            backgroundImage: "url(" + i.dir + ")",
            margin: "0px 5px",
            height: "50px",
            width: "50px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50px 50px"
          }}
        />
      );
    });

    return (
      <div>
        <Header exerciseHeader="Homónimos" instructions="Observa con atención el banco de imágenes y arrástralas con el mouse hasta la casilla que le corresponda. Presta atención en la escritura correcta de cada palabra."/>
      </div>
    );
  }
}

export default Homonimos;

/*<div className="container-drag">
  <Header/>
  {" "}
  <h2 className="header">DRAG & DROP DEMO</h2> <br />
  <div
    className="bank"
    onDragOver={e => this.onDragOver(e)}
    onDrop={e => this.onDrop(e, "bank")}
    id="container"
  >
    {imgs.bank}
  </div>
  <br />
  <table style={{ width: "100%" }}>
    <tr>
      <td>
        <div
          className="a1"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "a1")}
        >
          {" "}
          <span className="task-header">a1</span> {imgs.a1}{" "}
        </div>{" "}
      </td>
      <td>
        <div
          className="a2"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "a2")}
        >
          {" "}
          <span className="task-header">a2</span> {imgs.a2}{" "}
        </div>{" "}
      </td>
    </tr>
  </table>
</div>*/
