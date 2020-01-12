import { LightningElement, api, track } from 'lwc';
import { getSession } from 'data/sessionService';
//import LightningElementSLDS from 'util/LightningElementSLDS';

export default class sessionDetails extends LightningElement {
    @track session;

    @api
    set sessionId(id) {
        console.log('Setting session id', id);
        this._sessionId = id;
        this.session = getSession(id);
        console.log('Session', this.session);
    }
    get sessionId() {
        return this._sessionId;
    }
}
