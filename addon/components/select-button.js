import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'i',
  classNames: ['fa', 'fa-3x'],
  classNameBindings: ['iconClass'],

  selected: false,

  iconClass: function() {
    if (this.get('selected')) {
      return 'fa-check-circle';
    } else {
      return 'fa-circle-o';
    }
  }.property('selected'),

  click: function() {
    let state = !this.get('selected');
    this.set('selected', state);
    this.sendAction('selectionUpdated', state);
  },
});
