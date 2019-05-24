import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const withPortal = node => BaseComponent => {

    const body = document.querySelector('body');

    function isElement(obj) {
        try {
            //Using W3 DOM2 (works for FF, Opera and Chrome)
            return obj instanceof HTMLElement;
        }
        catch(e){
            //Browsers not supporting W3 DOM2 don't have HTMLElement and
            //an exception is thrown and we end up here. Testing some
            //properties that all elements have (works on IE7)
            return (typeof obj==="object") &&
                (obj.nodeType===1) && (typeof obj.style === "object") &&
                (typeof obj.ownerDocument ==="object");
        }
    }


    class withPortal extends Component {
      render() {
          if( isElement(node) ) {
              return ReactDOM.createPortal(
                  <BaseComponent {...this.props} />,
                  node
              );
          }

          if( typeof node === 'string') {
              const element = document.createElement('div');
              element.classList.add(node);
              document.body.appendChild(element);
              return ReactDOM.createPortal(
                  <BaseComponent {...this.props} />,
                  element
              );
          }

          return ReactDOM.createPortal(
              <BaseComponent {...this.props} />,
              body
          );
      }
  }

  return withPortal;

};
export default withPortal;
