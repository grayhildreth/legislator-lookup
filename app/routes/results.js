import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var bioGuide = "";
    var url  = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey='+key+'&zip=' + params.zip;
      return Ember.$.getJSON(url).then(function(responseJSON) {
        for (var i = 0; i < responseJSON.results.length; i++) {
          bioGuide = responseJSON.results[i].bioguide_id;
          console.log(bioGuide);
        }
        return responseJSON.results;
    });
  }
});
