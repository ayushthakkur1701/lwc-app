import { LightningElement } from 'lwc';
import LightningElementSLDS from 'util/LightningElementSLDS';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class App extends LightningElement {
    /*@track sessionId;
    @track state;
    constructor(){
        super();
        this.state='list';
        window.history.replaceState('list',null,'');
        window.onpopstate=event =>{
            if(event.state){
                this.state = event.state;
            }
            
        };
    }
    handleNavigate(event) {
        console.log("Handling event")
        this.sessionId = event.detail;
        this.state='details';
        window.history.pushState('details',null);
    }

    get isStateList(){
        return this.state === 'list';
    }

    get isStateDetails(){
        return this.state === 'details';
    }*/

    name = '';
    password = '';
    handleEmailInput = event => {
        this.name = event.target.value.toLowerCase();
    };

    handlePasswordInput = () => {
        this.password = event.target.value.toLowerCase();
    };

    handleLoginCheck = event => {
        var checkEmptyEmail = false;
        if (
            (this.name === '' || this.name == null) &&
            (this.password === '' || this.password == null)
        ) {
            checkEmptyEmail = true;
            alert('Please enter Email and Password.');
            // validateEmptyCheck(checkEmptyEmail,checkEmptyPassword);
        } else if (
            (this.name === '' || this.name == null) &&
            (this.password !== '' || this.password != null)
        ) {
            alert('Please enter Email.');
        } else if (
            (this.name !== '' || this.name != null) &&
            (this.password === '' || this.password == null)
        ) {
            alert('Please enter Password.');
        } else {
            alert('Move to next page');
        }
    };
}
