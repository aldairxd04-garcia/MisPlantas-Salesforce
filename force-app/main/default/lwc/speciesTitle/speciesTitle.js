import { api, LightningElement } from 'lwc';

export default class SpeciesTitle extends LightningElement {
    @api specie;

    connectedCallback() {
        console.log('Specie recibida:', JSON.stringify(this.specie));
    }
}
