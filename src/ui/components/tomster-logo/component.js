import Component from '@ember/component';
import { computed } from '@ember-decorators/object';

export default class TomsterLogo extends Component {
  @computed('filename', 'filetype')
  get tomsterPath() {
    return `/img/${this.filename}.${this.filetype}`
  }
}
