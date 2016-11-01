import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = "";
    if (parseInt(params.zip) === isNaN) {
      url  = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey='+key+'&zip=' + params.zip;
    } else {
      url  = 'http://congress.api.sunlightfoundation.com/legislators?apikey='+key+'&state=' + params.zip.toUpperCase();
    }
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });


  }
});
