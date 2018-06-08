import { CompatComponent as Component } from 'ember-glimmer-component';
import { classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';

@classNames('static-class')
export default class TomsterLogoComponent extends Component {
  @computed('@filename', '@filetype')
  get tomsterPath() {
    return `/img/${this.filename}.${this.filetype}`
  }
}
