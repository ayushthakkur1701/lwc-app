import { buildCustomElementConstructor } from 'lwc';
import MyApp from 'my/app';
import '@lwc/synthetic-shadow';

customElements.define('my-app', buildCustomElementConstructor(MyApp));
