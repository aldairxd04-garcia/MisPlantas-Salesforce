import { api, LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class SpeciesTitle extends NavigationMixin(LightningElement) {
    @api specie;

    connectedCallback() {
        console.log('Specie recibida:', JSON.stringify(this.specie));
    }

    get id(){
        return this.specie.Id;
    }

    get isOutdoors(){
        return this.specie.Location__c.includes('Outdoors');
    }

    get isIndoors(){
        return this.specie.Location__c.includes('Indoors');
    }

    navigateToRecordViewPage() {
    // View a custom object record.
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.id,
        objectApiName: "Species__c", // objectApiName is optional
        actionName: "view",
      },
    });
  }

  handleNavigateSpecieDetail(){
    this.navigateToRecordViewPage();
  }
}
