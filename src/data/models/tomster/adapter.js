import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
// import ENV from 'emberjs-2018/config/environment';

export default DS.JSONAPIAdapter.extend(AdapterFetch, {
  // host: ENV.rootURL,
  namespace: '/api'
});
