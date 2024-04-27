(() => {
  "use strict";

  /* La clase MicroReact proporciona métodos para crear elementos, administrar estados y representar
  elementos en JavaScript. */
  class MicroReact {
    version = "1.0.1";
    name = "MicroReact";
    #states = [];

    /**
     * La función `createElement` crea dinámicamente elementos HTML con atributos y detectores de
     * eventos específicos.
     * @param tag - El parámetro `tag` en la función `createElement` representa el tipo de elemento
     * HTML que desea crear. Por ejemplo, si pasa &quot;div&quot;, se creará un `<div> `elemento.
     * @param props - El parámetro `props` en la función `createElement` se refiere a un objeto que
     * contiene propiedades que se establecerán en el elemento creado. Estas propiedades pueden incluir
     * atributos como `id`, `class`, `style`, controladores de eventos como `onClick` y cualquier otro
     * atributo personalizado que desee establecer en el elemento. El
     * @param children - El parámetro `children` en la función `createElement` representa los elementos
     * secundarios o nodos de texto que se agregarán al elemento creado. Estos se pueden pasar como
     * argumentos adicionales después del objeto `props` al llamar a la función. La función itera sobre
     * cada elemento hijo en la matriz `children` y
     * @returns La función `createElement` devuelve un elemento HTML recién creado con la etiqueta, los
     * atributos, los detectores de eventos y los nodos secundarios especificados como se proporciona
     * en los argumentos de la función.
     */
    createElement(tag, props, ...children) {
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
    }

    /**
     * La función `useState` en JavaScript permite administrar el estado de un componente devolviendo
     * el valor del estado actual y una función para actualizarlo.
     * @param initialValue - El parámetro `initialValue` es el valor inicial al que se debe establecer
     * el estado cuando se llama por primera vez al gancho `useState`. Este valor inicial se utilizará
     * hasta que el estado se actualice utilizando la función `setState` devuelta por el gancho
     * `useState`.
     * @returns Una matriz que contiene el valor del estado actual y una función para actualizar el
     * valor del estado.
     */
    useState(initialValue) {
      const stateIndex = this.#states.length;
      this.#states[stateIndex] = this.#states[stateIndex] || initialValue;

      const setState = (newValue) => {
        this.#states[stateIndex] = newValue;
      };

      return [this.#states[stateIndex], setState];
    }

    /**
     * La función `render` borra el contenido de un elemento contenedor y le agrega un nuevo elemento.
     * @param element - El parámetro "elemento" suele ser un elemento DOM que desea representar o
     * mostrar en una página web. Podría ser un div, un párrafo, una imagen, una lista o cualquier otro
     * elemento HTML.
     * @param container - El parámetro "contenedor" suele ser una referencia a un elemento HTML donde
     * desea representar el "elemento". Es el elemento DOM que contendrá el "elemento" renderizado.
     */
    render(element, container) {
      container.innerHTML = "";
      container.appendChild(element);
    }
  }

  if (typeof window.MicroReact === "undefined") {
    window.MicroReact = new MicroReact();
  } else {
    console.error(
      `Libreria ya cargada ${window.MicroReact.name} v-${window.MicroReact.version}`
    );
  }
})();
