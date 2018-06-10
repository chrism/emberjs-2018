import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch('/api/tomsters/1');
    let json = await response.json();

    return json["data"]["attributes"];
  }
}
