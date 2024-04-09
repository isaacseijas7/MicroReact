(() => {
  "use strict";

  // Ejemplo de uso de Micro biblioteca -> Componente de lista
  const ListComponent = (items ) => {
    const itemsComponent = items.map((item) =>
      MicroReact.createElement("li", null, item)
    );

    return MicroReact.createElement("ul", null, ...itemsComponent);
  };

  const app = MicroReact.createElement(
    "div",
    null,
    MicroReact.createElement("h1", null, "Lista de elementos:"),
    ListComponent(["Item 1", "Item 2", "Item 3"])
  );

  MicroReact.render(app, document.getElementById("root"));
})();
