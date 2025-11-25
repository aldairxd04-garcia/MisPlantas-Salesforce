import { LightningElement, wire } from 'lwc';
import getAllSpecies from '@salesforce/apex/SpeciesService.getAllSpecies';

export default class SpeciesList extends LightningElement {
    //decorador para almacenar la consukta de getAllSpecies
    @wire(getAllSpecies) 
    species;

}