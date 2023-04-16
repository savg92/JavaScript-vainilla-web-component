import * as main from './CounterBox/Counter/counter.js';
import * as main2 from './/CounterBox//counterBox.js';

const child = `<Counter- id="counter"></Counter->`

const el = document.getElementById('app');

(() => {
    el.innerHTML = `
        <div class="mainContainer">
            <h1>JavaScript vainilla web component</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, asperiores?</p>
        </div>
        <CounterBox- id="counterBox" prop=${child}</Counter->></CounterBox->
        `
        // <Counter- id="counter" count="0"></Counter->
    }
)();