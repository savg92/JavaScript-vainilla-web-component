class CounterBox extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    // getters
    get prop(){
        return this.getAttribute('prop');
    }

    // setters
    set prop(val){
        this.setAttribute('prop', val);
    }

    // atributes for the element
    static get observedAttributes(){
        return ["prop"];
    }

    // // methods
    // inc(){
    //     this.prop++;
    // }
    // dec(){
    //     if(this.prop > 0){
    //         this.prop--;
    //     }
    // }
    // reset(){
    //     this.prop = 0;
    // }

    // // handlers
    // increaseHandler(){
    //     let btnPlus = this.shadow.querySelector('#btnPlus');
    //     btnPlus.addEventListener('click', this.inc.bind(this));
    // }
    // decreaseHandler(){
    //     let btnMinus = this.shadow.querySelector('#btnMinus');
    //     btnMinus.addEventListener('click', this.dec.bind(this));
    // }
    // resetHandler(){
    //     let btnReset = this.shadow.querySelector('#btnReset');
    //     btnReset.addEventListener('click', this.reset.bind(this));
    // }

    // attribute changed callback, called when attribute is changed, modified, or removed
    attributeChangedCallback(prop, oldVal, newVal){
        if(prop === 'prop'){
            this.render();

            // this.increaseHandler();

            // this.decreaseHandler();

            // this.resetHandler();
        }
    }

    // lifecycle
    connectedCallback(){
        this.render();

        // // handler for the increment button
        // this.increaseHandler();

        // // handler for the decrement button
        // let btnMinus = this.shadow.querySelector('#btnMinus');
        // btnMinus.addEventListener('click', this.dec.bind(this));

        // // handler for the reset button
        // let btnReset = this.shadow.querySelector('#btnReset');
        // btnReset.addEventListener('click', this.reset.bind(this));
    }

    // render method with the template markup
    render(){
        this.shadow.innerHTML =
        `
        <div class="container">
            <h1 id="h1">Counter</h1>
            ${this.prop}
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
customElements.define('counterbox-', CounterBox);