import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default class ApplicationRoute extends Route {
  async model() {
    await new Promise(resolve => later(resolve, 2000));

    return { filename: "tomster", filetype: "png" };
  }
}
