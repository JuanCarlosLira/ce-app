import React from "react";

class Drag extends React.Component {
  state = {
    tasks: [
      { name: "1", category: "bank", bgcolor: "#bee3aa" },
      { name: "2", category: "bank", bgcolor: "#bee3aa" },
      { name: "3", category: "bank", bgcolor: "#bee3aa" },
      { name: "4", category: "bank", bgcolor: "#bee3aa" },
      { name: "5", category: "bank", bgcolor: "#bee3aa" },
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" }
    ]
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, id) => {
    console.log("dragStart: ", id);
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
      bank: [],
      wip: [],
      complete: []
    };

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="dreaggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        {" "}
        <h2 className="header">DRAG & DROP DEMO</h2>{" "}
        <div
          className="wip"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, "wip");
          }}
        >
          {" "}
          <span className="task-header">WIP</span> {tasks.wip}{" "}
        </div>{" "}
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "complete")}
        >
          {" "}
          <span className="task-header">COMPLETED</span> {tasks.complete}{" "}
        </div>{" "}
        <div
          className="bank"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "bank")}
        >
          {" "}
          <span className="task-header">BANK</span> {tasks.bank}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Drag;

// from
// https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/
