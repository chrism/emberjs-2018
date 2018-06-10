import Route from '@ember/routing/route';
// import fetch from 'fetch';

export default class ApplicationRoute extends Route {
  async model() {
    let tomster = await this.get('store').find('tomster' ,1);

    return tomster;
  }
}
