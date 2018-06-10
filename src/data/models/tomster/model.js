import DS from 'ember-data';
import { attr } from '@ember-decorators/data';

export default class Tomster extends DS.Model {
  @attr('string') filename
  @attr('string') filetype
}
