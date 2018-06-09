import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return { filename: "tomster", filetype: "png" };
  }
}
