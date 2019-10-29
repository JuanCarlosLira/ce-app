import React from "react";
import "../css/Conectores.css";

class Conectores extends React.Component {
  state = {
    tasks: [
      {
        name: "A continuación",
        category: "origin",
        category2: "orden"
      },
      {
        name: "Finalmente",
        category: "origin",
        category2: "orden"
      },
      {
        name: "Sobre todo",
        category: "origin",
        category2: "orden"
      },
      {
        name: "Y",
        category: "origin",
        category2: "idea"
      },
      {
        name: "Además",
        category: "origin",
        category2: "idea"
      },
      {
        name: "Asimismo",
        category: "origin",
        category2: "idea"
      }
      /*{ name: "Lo más importante", category: "origin", bgcolor: "#99ccff" },
      { name: "En último término", category: "origin", bgcolor: "#99ccff" },
      { name: "Por último", category: "origin", bgcolor: "#99ccff" },
      { name: "Por fin", category: "origin", bgcolor: "#99ccff" },
      { name: "Primero,", category: "origin", bgcolor: "#99ccff" },
      { name: "En primer lugar", category: "origin", bgcolor: "#99ccff" },
      { name: "Antes que nada", category: "origin", bgcolor: "#99ccff" },
      { name: "Ante todo", category: "origin", bgcolor: "#99ccff" },
      { name: "Mientras", category: "origin", bgcolor: "#99ccff" },
      { name: "Después", category: "origin", bgcolor: "#99ccff" },
      { name: "Y", category: "origin", bgcolor: "#99ccff" },
      { name: "Además", category: "origin", bgcolor: "#99ccff" },
      { name: "Asimismo", category: "origin", bgcolor: "#99ccff" },
      {
        name: "Algo semejante ocurre con",
        category: "origin",
        bgcolor: "#99ccff"
      },
      { name: "Al mismo tiempo", category: "origin", bgcolor: "#99ccff" },
      { name: "También", category: "origin", bgcolor: "#99ccff" },
      { name: "Pero", category: "origin", bgcolor: "#99ccff" },
      { name: "Sin embargo", category: "origin", bgcolor: "#99ccff" },
      { name: "Ahora bien", category: "origin", bgcolor: "#99ccff" },
      { name: "Aunque", category: "origin", bgcolor: "#99ccff" }*/
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
    let tasks = this.state.tasks.filter(task => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });
    this.setState({ ...this.state, tasks });
  };

  render() {
    var tasks = {
      origin: [],
      orden: [],
      idea: [],
      contraste: [],
      ejemplo: [],
      explicacion: [],
      causa: [],
      efecto: [],
      condicion: [],
      finalidad: [],
      comparacion: [],
      conclusion: []
    };

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{
            backgroundColor: t.category === t.category2 ? "#66ff66" : "#99ccff",
            margin: "5px 5px",
            padding: "5px",
            borderRadius: "10px"
          }}
        >
          <strong>{t.name}</strong>
        </div>
      );
    });

    return (
      <div className="container-drag">
        {" "}
        <p>Conectores</p>
        <div
          className="origin"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "origin")}
          id="container"
        >
          {tasks.origin}
        </div>
        <div
          className="orden"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, "orden");
          }}
        >
          {" "}
          <span className="task-header">
            Orden cronológico y orden de importancia
          </span>{" "}
          {tasks.orden}{" "}
        </div>{" "}
        <br />
        <div
          className="idea"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, "idea");
          }}
        >
          {" "}
          <span className="task-header">
            Para introducir una idea adicional
          </span>{" "}
          {tasks.idea}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Conectores;
