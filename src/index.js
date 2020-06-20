import { Counter } from "./components/Counter";

window.onload = () => {
  const container = document.querySelector("#root");
  new Counter(container);
};
