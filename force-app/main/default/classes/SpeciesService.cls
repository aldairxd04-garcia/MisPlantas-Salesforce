public with sharing class SpeciesService {
    @AuraEnabled(cacheable=true)
    public static List<Species__c> getAllSpecies(String queryText){
        String queryValue = '%' + queryText + '%';
        return [
            SELECT Id, Name, Description__c, Image_URL__c, Location__c
            FROM Species__c
            WHERE Name LIKE :queryValue 
        ];
    }
}