import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    let tomster = await this.store.find('tomster' ,1);

    return tomster;
  }
}
