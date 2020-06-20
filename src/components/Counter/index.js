import Reacto from "../../modules/reacto";

export class Counter {
  state = { counter: 0 };
  constructor(container) {
    this.container = container;
    this.render();
  }

  setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };
  };

  createButton = (content) => {
    const { className, onclick, text } = content;
    return Reacto.createElement(
      "button",
      { className: `counter-btn ${className}`, onclick },
      Reacto.createTextElement(text)
    );
  };

  setCount = (counter) => {
    this.setState({ counter });
    this.render();
  };

  showCounter = () => {
    const { counter } = this.state;
    return Reacto.createElement(
      "h2",
      { className: "counter" },
      Reacto.createTextElement(counter)
    );
  };

  render = () => {
    const { counter } = this.state;
    this.container.innerText = "";
    const incrementBtn = {
      className: "increment-btn",
      text: "Increment",
      onclick: () => this.setCount(counter + 1),
    };
    const decrementBtn = {
      className: "decrement-btn",
      text: "Decrement",
      onclick: () => counter && this.setCount(counter - 1),
    };

    const App = Reacto.createElement(
      "div",
      {
        style:
          "display: flex; width: 100%; height: 100%; justify-content: center; align-items: center;",
      },
      [
        this.createButton(incrementBtn),
        this.showCounter(),
        this.createButton(decrementBtn),
      ]
    );
    Reacto.renderDOM(App, this.container);
  };
}
