import Component from '../../component.js';

export default class ShoppingCart extends Component{
 constructor({ element }) {
    super({ element });

    this._render();
     
    this.on('click', 'add-to-cart', () => {
        this.emit('addToCart', phone);
        });
  }

    
 /*   on(eventName, elementName, callback) {
    this._element.addEventListener(eventName, (event) => {
      let delegateTarget = event.target.closest(`[data-element="${ elementName }"]`);

      if (!delegateTarget || !this._element.contains(delegateTarget)) {
        return;
      }

      callback(event);
    });
    
     this._cart.subscribe('addToCart',  (event) => {
        let phoneElement = event.target.closest('[data-element="phone"]');
        
        console.log(phoneElement.dataset.phoneId);
    })
       subscribe(eventName, callback){
        this._callbackMap[eventName] = callback;
    }
    
    emit(eventName, data){
        const callback = this._callbackMap;
        if(!callback){
            return;
        }
        this._callbackMap[eventName](data);
    }
    
        
    */
       
   _render() {
    this._element.innerHTML = `
      <p>Shopping Cart</p>
          <ul>
            <li>Phone 1</li>
            <li>Phone 2</li>
            <li>Phone 3</li>
          </ul>
    `;
  }
}
