class Reacto {
  createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    };
  }

  createElement(type, props, children) {
    const childrenNodes = children.length ? children : new Array(children);

    return {
      type,
      props: {
        ...props,
        children: childrenNodes.map((child) =>
          typeof child === "object" ? child : this.createTextElement(child)
        ),
      },
    };
  }

  renderDOM(element, container) {
    const dom =
      element.type === "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type);
    const isProperty = (key) => key !== "children";
    Object.keys(element.props)
      .filter(isProperty)
      .forEach((name) => {
        dom[name] = element.props[name];
      });
    element.props.children.forEach((child) => this.renderDOM(child, dom));
    container.appendChild(dom);
  }
}

export default new Reacto();
