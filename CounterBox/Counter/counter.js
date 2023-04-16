class Counter extends HTMLElement{
    constructor(){
        super();
        this.count = 0;
        this.shadow = this.attachShadow({mode: 'open'});
    }

    // getters
    get count(){
        return this.getAttribute('count');
    }

    // setters
    set count(val){
        this.setAttribute('count', val);
    }

    // atributes for the element
    static get observedAttributes(){
        return ["count"];
    }

    // methods
    inc(){
        this.count++;
    }
    dec(){
        if(this.count > 0){
            this.count--;
        }
    }
    reset(){
        this.count = 0;
    }

    // handlers
    increaseHandler(){
        let btnPlus = this.shadow.querySelector('#btnPlus');
        btnPlus.addEventListener('click', this.inc.bind(this));
    }
    decreaseHandler(){
        let btnMinus = this.shadow.querySelector('#btnMinus');
        btnMinus.addEventListener('click', this.dec.bind(this));
    }
    resetHandler(){
        let btnReset = this.shadow.querySelector('#btnReset');
        btnReset.addEventListener('click', this.reset.bind(this));
    }

    // attribute changed callback, called when attribute is changed, modified, or removed
    attributeChangedCallback(prop, oldVal, newVal){
        if(prop === 'count'){
            this.render();

            this.increaseHandler();

            this.decreaseHandler();

            this.resetHandler();
        }
    }

    // lifecycle
    connectedCallback(){
        this.render();

        // handler for the increment button
        this.increaseHandler();

        // handler for the decrement button
        let btnMinus = this.shadow.querySelector('#btnMinus');
        btnMinus.addEventListener('click', this.dec.bind(this));

        // handler for the reset button
        let btnReset = this.shadow.querySelector('#btnReset');
        btnReset.addEventListener('click', this.reset.bind(this));
    }

    // render method with the template markup
    render(){
        this.shadow.innerHTML =
        // <h1 id="h1">Counter</h1>
        `
        <div class="containerCounter">
            <p>${this.count}</p>
            <div class="btns">
                <button id="btnMinus">Decrement</button>
                <button id="btnReset">Reset</button>
                <button id="btnPlus">Increment</button>
            </div>
        </div>
        `
        // Apply external styles to the shadow DOM
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "style.css");
    
        // Attach the created element to the shadow DOM
        this.shadow.appendChild(linkElem);
    }
}

// register the custom element
customElements.define('counter-', Counter);