import React from "react";
import Header from './Header'
import "../css/Conectores.css";
import Scores from './Scores'

class Conectores extends React.Component {
  score = 0;
  state = {
    compare: false,
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
      },
      {
        name: "Sin Embargo",
        category: "origin",
        category2: "contraste"
      },
      {
        name: "Ahora bien",
        category: "origin",
        category2: "contraste"
      },
      {
        name: "No Obstante",
        category: "origin",
        category2: "contraste"
      },
      {
        name: "Por ejemplo",
        category: "origin",
        category2: "ejemplo"
      },
      {
        name: "Tal como",
        category: "origin",
        category2: "ejemplo"
      },
      {
        name: "Un ejemplo de",
        category: "origin",
        category2: "ejemplo"
      },
      {
        name: "Es decir",
        category: "origin",
        category2: "explicacion"
      },
      {
        name: "En otras palabras",
        category: "origin",
        category2: "explicacion"
      },
      {
        name: "Esto es",
        category: "origin",
        category2: "explicacion"
      },
      {
        name: "Puesto que",
        category: "origin",
        category2: "causa"
      },
      {
        name: "Debido a",
        category: "origin",
        category2: "causa"
      },
      {
        name: "Ya que",
        category: "origin",
        category2: "causa"
      },
      {
        name: "Por consiguiente",
        category: "origin",
        category2: "efecto"
      },
      {
        name: "Por lo tanto",
        category: "origin",
        category2: "efecto"
      },
      {
        name: "De ahí que",
        category: "origin",
        category2: "efecto"
      },
      {
        name: "Siempre que",
        category: "origin",
        category2: "condicion"
      },
      {
        name: "Si",
        category: "origin",
        category2: "condicion"
      },
      {
        name: "Supongamos",
        category: "origin",
        category2: "condicion"
      },
      {
        name: "Con objeto de",
        category: "origin",
        category2: "finalidad"
      },
      {
        name: "A fin de que",
        category: "origin",
        category2: "finalidad"
      },
      {
        name: "Con la intención de",
        category: "origin",
        category2: "finalidad"
      },
      {
        name: "Al igual que",
        category: "origin",
        category2: "comparacion"
      },
      {
        name: "Del mismo modo",
        category: "origin",
        category2: "comparacion"
      },
      {
        name: "De modo similar",
        category: "origin",
        category2: "comparacion"
      },
      {
        name: "En resumen",
        category: "origin",
        category2: "conclusion"
      },
      {
        name: "En síntesis",
        category: "origin",
        category2: "conclusion"
      },
      {
        name: "Para concluir",
        category: "origin",
        category2: "conclusion"
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
            backgroundColor: this.state.compare ? (t.category === t.category2 ? "#66ff66" : "#ff6666") : "#99ccff", //t.category === t.category2 ? "#66ff66" : "#99ccff",
            margin: "5px 5px",
            padding: "5px",
            borderRadius: "10px"
          }}
        >
          <strong>{t.name}</strong>
        </div>
      );
    });

    this.score = 0;
    this.state.tasks.forEach(t =>{
      if (t.category === t.category2) {
        this.score++;
      }
    })

    return (
      <div>
        <Header exerciseHeader="Conectores" instructions="Observa con atención el banco de palabras y arrástralas con el mouse hasta la casilla que le corresponda."/>

        <div
          className="origin"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "origin")}
          id="container"
        >
          {tasks.origin}
        </div>
        <div id="container">
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

          <div
            className="contraste"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "contraste");
            }}
          >
            {" "}
            <span className="task-header">
              Para introducir un contraste
            </span>{" "}
            {tasks.contraste}{" "}
          </div>{" "}

          <div
            className="ejemplo"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "ejemplo");
            }}
          >
            {" "}
            <span className="task-header">
              Para introducir un ejemplo
            </span>{" "}
            {tasks.ejemplo}{" "}
          </div>{" "}

          <div
            className="explicacion"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "explicacion");
            }}
          >
            {" "}
            <span className="task-header">
              Para introducir una explicación
            </span>{" "}
            {tasks.explicacion}{" "}
          </div>{" "}

          <div
            className="causa"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "causa");
            }}
          >
            {" "}
            <span className="task-header">
              Para introducir causa
            </span>{" "}
            {tasks.causa}{" "}
          </div>{" "}

          <div
            className="efecto"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "efecto");
            }}
          >
            {" "}
            <span className="task-header">
              Para introducir un efecto
            </span>{" "}
            {tasks.efecto}{" "}
          </div>{" "}

          <div
            className="condicion"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "condicion");
            }}
          >
            {" "}
            <span className="task-header">
              Para introducir una condición
            </span>{" "}
            {tasks.condicion}{" "}
          </div>{" "}

          <div
            className="finalidad"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "finalidad");
            }}
          >
            {" "}
            <span className="task-header">
              Para introducir la finalidad
            </span>{" "}
            {tasks.finalidad}{" "}
          </div>{" "}

          <div
            className="comparacion"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "comparacion");
            }}
          >
            {" "}
            <span className="task-header">
              Para introducir una comparación
            </span>{" "}
            {tasks.comparacion}{" "}
          </div>{" "}

          <div
            className="conclusion"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => {
              this.onDrop(e, "conclusion");
            }}
          >
            {" "}
            <span className="task-header">
              Para introducir una conclusión
            </span>{" "}
            {tasks.conclusion}{" "}
          </div>{" "}
        </div>
        {this.state.compare &&
          <Scores score={this.score} maxScore="33"/>
        }
        <button onClick={this.updateComparar.bind(this)}>Comparar</button>
        <button>Salir</button>
      </div>
    );
  }
}

export default Conectores;
