import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 1,
          name: "Monster 1",
        },
        {
          id: 2,
          name: "Monster 2",
        },
        {
          id: 3,
          name: "Monster 3",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
