(() => {
  "use strict";

  // Ejemplo de uso de Micro biblioteca
  const state = {
    count: 0,
  };

  const increment = () => {
    state.count++;
    render();
  };

  const decrement = () => {
    state.count--;
    render();
  };

  const render = () => {
    const app = MicroReact.createElement(
      "div",
      {
        style: `padding: 10px 10px;
                border: solid #127dbd 1px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                max-width: 200px;
                justify-content: center;
                align-items: center;`,
      },
      MicroReact.createElement(
        "h1",
        {
        style: `font-size: 30px;
                color: #127dbd;`,
        },
        `Contador: ${state.count}`
      ),
      MicroReact.createElement("button", { onClick: increment }, "Incrementar"),
      MicroReact.createElement("button", { onClick: decrement }, "Decrementar")
    );

    MicroReact.render(app, document.getElementById("root"));
  };

  render();
})();
