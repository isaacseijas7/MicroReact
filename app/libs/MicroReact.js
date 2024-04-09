(() => {
  "use strict";

  // Micro framework inspirado en React
  /* Este código define un micro marco llamado MicroReact que proporciona dos funciones principales: */
  const MicroReact = {
    version: "1.0.0",
    name: "MicroReact",

    /* La función `createElement` en el marco MicroReact es responsable de crear un nuevo elemento DOM
  basado en la etiqueta, las propiedades y los elementos secundarios proporcionados. Aquí hay un
  desglose de lo que hace: */
    createElement: (tag, props, ...children) => {
      const element = document.createElement(tag);

      if (props) {
        Object.entries(props).forEach(([key, value]) => {
          if (key.startsWith("on") && typeof value === "function") {
            const eventName = key.substring(2).toLowerCase();
            element.addEventListener(eventName, value);
          } else {
            element.setAttribute(key, value);
          }
        });
      }

      if (children) {
        children.forEach((child) => {
          if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
          } else if (child instanceof HTMLElement) {
            element.appendChild(child);
          }
        });
      }

      return element;
    },

    /* La función `render` en el marco MicroReact es responsable de representar un elemento determinado
  dentro de un contenedor específico. Aquí hay un desglose de lo que hace: */
    render: (element, container) => {
      container.innerHTML = "";
      container.appendChild(element);
    },
  };

  if (typeof window.MicroReact === "undefined") {
    window.MicroReact = MicroReact;
  } else {
    console.error(
      `Libreria ya cargada ${MicroReact.name} v-${MicroReact.version}`
    );
  }
})();
