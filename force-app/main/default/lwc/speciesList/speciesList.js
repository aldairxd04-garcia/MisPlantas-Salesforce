import { LightningElement, wire } from 'lwc';
import getAllSpecies from '@salesforce/apex/SpeciesService.getAllSpecies';

export default class SpeciesList extends LightningElement {
    //PROPS, GETS AND SETS
    searchText;

    //LIFECYCLE HOOKS

    //WIRE
    //decorador para almacenar la consukta de getAllSpecies
    @wire(getAllSpecies, {queryText: '$searchText'}) 
    species;

    //METHODS
    handleSearchInputValue(evt){
        const keySearch = evt.detail.value;
        if(keySearch.length > 2 || keySearch === ''){
            this.searchText = keySearch;
        }
    }
}