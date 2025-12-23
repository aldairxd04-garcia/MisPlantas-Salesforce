public with sharing class SuperheroService {
  @AuraEnabled(cacheable=true)
    public static SuperheroDTO getHero(String heroName) {

        Http http = new Http();
        HttpRequest req = new HttpRequest();

        // Endpoint correcto usando tu Named Credential Superheroes_API
        req.setEndpoint('callout:SuperheroesAPICredential/api/?hero=' + EncodingUtil.urlEncode(heroName, 'UTF-8'));
        req.setMethod('GET');
        req.setHeader('X-RapidAPI-Host', 'superhero-search.p.rapidapi.com'); 
        req.setHeader('Content-Type', 'application/json');

        HttpResponse res = http.send(req);

        System.debug('📥 Status code: ' + res.getStatusCode());
        System.debug('📥 Body: ' + res.getBody());


        if (res.getStatusCode() == 200) {
            return (SuperheroDTO) JSON.deserialize(res.getBody(), SuperheroDTO.class);
        } else {
            throw new AuraHandledException(
                'Error al obtener datos del héroe. Código: ' + res.getStatusCode()
            );
        }
    }

  public class SuperheroDTO {
    public String name;
    public Map<String, Object> powerstats;
    public Map<String, Object> appearance;
    public Map<String, Object> biography;
    public Map<String, Object> work;
    public Map<String, Object> connections;
    public String image;
  }
}
