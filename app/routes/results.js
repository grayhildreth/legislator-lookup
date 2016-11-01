import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url  = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=a1e999c963064f4b92d8c0ab43c77ed4&zip=' + params.zip;
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
    });
  }
});
