import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    const delayPromise = new Ember.RSVP.Promise(resolve => Ember.run.later(resolve, 2000));

    return delayPromise.then(() => {
      return { filename: "tomster", filetype: "png" };
    });
  }
}
