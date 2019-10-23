import React from "react";
import Header from './Header'
import "../css/Homonimos.css";

class Homonimos extends React.Component {
  state = {
    compare: false,
    imgs: [
      { name: "maya", category: "bank", dir: "../img/homonimos/maya.jpg" },
      { name: "reusar", category: "bank", dir: "../img/homonimos/reusar.jpg" },
      {
        name: "vaso",
        category: "bank",
        dir:
          "../img/homonimos/vaso.jpg"
      },
      {
        name: "malla",
        category: "bank",
        dir:
          "../img/homonimos/malla.jpg"
      },
      {
        name: "cocer",
        category: "bank",
        dir:
          "../img/homonimos/cocer.jpg"
      },
      {
        name: "rehusar",
        category: "bank",
        dir:
          "../img/homonimos/rehusar.jpg"
      },
      {
        name: "valla",
        category: "bank",
        dir:
          "../img/homonimos/valla.jpg"
      },
      {
        name: "casa",
        category: "bank",
        dir:
          "../img/homonimos/casa.jpg"
      },
      {
        name: "baya",
        category: "bank",
        dir:
          "../img/homonimos/baya.jpg"
      },
      {
        name: "bazo",
        category: "bank",
        dir:
          "../img/homonimos/bazo.jpg"
      },
      {
        name: "cegar",
        category: "bank",
        dir:
          "../img/homonimos/cegar.jpg"
      },
      {
        name: "errar",
        category: "bank",
        dir:
          "../img/homonimos/errar.jpg"
      },
      {
        name: "herrar",
        category: "bank",
        dir:
          "../img/homonimos/herrar.jpg"
      },
      {
        name: "coser",
        category: "bank",
        dir:
          "../img/homonimos/coser.jpg"
      },
      {
        name: "caza",
        category: "bank",
        dir:
          "../img/homonimos/caza.jpg"
      },
      {
        name: "segar",
        category: "bank",
        dir:
          "../img/homonimos/segar.jpg"
      }
    ]
  };

  updateComparar() {
    this.setState({compare: !this.state.compare});
    //console.log(this.state.compare);
  }

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
      maya: [],
      malla: [],
      baya: [],
      valla: [],
      cocer: [],
      coser: [],
      casa: [],
      caza: [],
      errar: [],
      herrar: [],
      cegar: [],
      segar: [],
      vaso: [],
      bazo: [],
      reusar: [],
      rehusar: []
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
            margin: "5px 5px",
            height: "100px",
            width: "100px",
            borderRadius: "5px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100px 100px"
          }}
        />
      );
    });
    //if (imgs.rehusar.length > 0) {console.log(imgs.rehusar[0].key)}
    return (
      <div>
        <Header exerciseHeader="Homónimos" instructions="Observa con atención el banco de imágenes y arrástralas con el mouse hasta la casilla que le corresponda. Presta atención en la escritura correcta de cada palabra."/>

        <div className="container-drag" style={{textAlign: "center"}}>
          <div
            className="bank"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "bank")}
            id="container"
            style={{display: "inline-block", width: "70%"}}
          >
            {imgs.bank}
          </div>
          <br />

          <table style={{ tableLayout: "fixed", width: "90%", borderRadius: "5px",  borderCollapse: "collapse", background: "red", display: "inline-block" }}>
          <tbody>
            <tr>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.maya.length === 1 ? (imgs.maya[0].key === "maya" ? '#99ff99' : 'red') : 'red'):'#99ccff'}}>
                <div
                  className="maya"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "maya")}
                >
                  {" "}
                  <span className="task-header">MAYA</span><br/> {imgs.maya}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.malla.length === 1 ? (imgs.malla[0].key === "malla" ? '#00cc00' : 'red') : 'red'):'#6699ff'}}>
                <div
                  className="malla"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "malla")}
                >
                  {" "}
                  <span className="task-header">MALLA</span><br/> {imgs.malla}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.baya.length === 1 ? (imgs.baya[0].key === "baya" ? '#99ff99' : 'red') : 'red'):'#99ccff'}}>
                <div
                  className="baya"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "baya")}
                >
                  {" "}
                  <span className="task-header">BAYA</span><br/> {imgs.baya}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.valla.length === 1 ? (imgs.valla[0].key === "valla" ? '#00cc00' : 'red') : 'red'):'#6699ff'}}>
                <div
                  className="valla"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "valla")}
                >
                  {" "}
                  <span className="task-header">VALLA</span><br/> {imgs.valla}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.cocer.length === 1 ? (imgs.cocer[0].key === "cocer" ? '#99ff99' : 'red') : 'red'):'#99ccff'}}>
                <div
                  className="cocer"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "cocer")}
                >
                  {" "}
                  <span className="task-header">COCER</span><br/> {imgs.cocer}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.coser.length === 1 ? (imgs.coser[0].key === "coser" ? '#00cc00' : 'red') : 'red'):'#6699ff'}}>
                <div
                  className="coser"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "coser")}
                >
                  {" "}
                  <span className="task-header">COSER</span><br/> {imgs.coser}{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.casa.length === 1 ? (imgs.casa[0].key === "casa" ? '#00cc00' : 'red') : 'red'):'#6699ff'}}>
                <div
                  className="casa"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "casa")}
                >
                  {" "}
                  <span className="task-header">CASA</span><br/> {imgs.casa}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.caza.length === 1 ? (imgs.caza[0].key === "caza" ? '#99ff99' : 'red') : 'red'):'#99ccff'}}>
                <div
                  className="caza"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "caza")}
                >
                  {" "}
                  <span className="task-header">CAZA</span><br/> {imgs.caza}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.errar.length === 1 ? (imgs.errar[0].key === "errar" ? '#00cc00' : 'red') : 'red'):'#6699ff'}}>
                <div
                  className="errar"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "errar")}
                >
                  {" "}
                  <span className="task-header">ERRAR</span><br/> {imgs.errar}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.herrar.length === 1 ? (imgs.herrar[0].key === "herrar" ? '#99ff99' : 'red') : 'red'):'#99ccff'}}>
                <div
                  className="herrar"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "herrar")}
                >
                  {" "}
                  <span className="task-header">HERRAR</span><br/> {imgs.herrar}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.cegar.length === 1 ? (imgs.cegar[0].key === "cegar" ? '#00cc00' : 'red') : 'red'):'#6699ff'}}>
                <div
                  className="cegar"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "cegar")}
                >
                  {" "}
                  <span className="task-header">CEGAR</span><br/> {imgs.cegar}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.segar.length === 1 ? (imgs.segar[0].key === "segar" ? '#99ff99' : 'red') : 'red'):'#99ccff'}}>
                <div
                  className="segar"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "segar")}
                >
                  {" "}
                  <span className="task-header">SEGAR</span><br/> {imgs.segar}{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td style={{width: "200px", height: "150px", background: "#99ccff"}}>
                {" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.vaso.length === 1 ? (imgs.vaso[0].key === "vaso" ? '#00cc00' : 'red') : 'red'):'#6699ff'}}>
                <div
                  className="vaso"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "vaso")}
                >
                  {" "}
                  <span className="task-header">VASO</span><br/> {imgs.vaso}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.bazo.length === 1 ? (imgs.bazo[0].key === "bazo" ? '#99ff99' : 'red') : 'red'):'#99ccff'}}>
                <div
                  className="bazo"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "bazo")}
                >
                  {" "}
                  <span className="task-header">BAZO</span><br/> {imgs.bazo}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.reusar.length === 1 ? (imgs.reusar[0].key === "reusar" ? '#00cc00' : 'red') : 'red'):'#6699ff'}}>
                <div
                  className="reusar"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "reusar")}
                >
                  {" "}
                  <span className="task-header">REUSAR</span><br/> {imgs.reusar}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px", backgroundColor: this.state.compare  ? (imgs.rehusar.length === 1 ? (imgs.rehusar[0].key === "rehusar" ? '#99ff99' : 'red') : 'red'):'#99ccff'}}>
                <div
                  className="rehusar"
                  id="container"
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, "rehusar")}
                >
                  {" "}
                  <span className="task-header">REHUSAR</span><br/> {imgs.rehusar}{" "}
                </div>{" "}
              </td>
              <td style={{width: "200px", height: "150px",  background: "#6699ff"}}>
                {" "}
              </td>
            </tr>
          </tbody>
          </table>
        </div>
        <button onClick={this.updateComparar.bind(this)}>Comparar</button>
        <button>Salir</button>
      </div>
    );
  }
}

export default Homonimos;

/*
<table style={{ tableLayout: "fixed", width: "90%", borderRadius: "5px",  borderCollapse: "collapse", background: "red", display: "inline-block" }}>
  <tr>
    <td>
      <div
        className="cocer"
        id="container"
        onDragOver={e => this.onDragOver(e)}
        onDrop={e => this.onDrop(e, "cocer")}
      >
        {" "}
        <span className="task-header">COCER</span><br/> {imgs.cocer}{" "}
      </div>{" "}
    </td>
    <td>
      <div
        className="coser"
        id="container"
        onDragOver={e => this.onDragOver(e)}
        onDrop={e => this.onDrop(e, "coser")}
      >
        {" "}
        <span className="task-header">COSER</span><br/> {imgs.coser}{" "}
      </div>{" "}
    </td>
  </tr>
</table>
*/

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
