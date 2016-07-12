import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'i',
  classNames: ['fa', 'fa-3x'],
  classNameBindings: ['iconClass'],

  selected: false,
  selectedIcon: 'fa-check-circle',
  unselectedIcon: 'fa-circle-o',

  iconClass: function() {
    if (this.get('selected')) {
      return this.get('selectedIcon');
    } else {
      return this.get('unselectedIcon');
    }
  }.property('selected', 'selectedIcon', 'unselectedIcon'),

  click: function() {
    let state = !this.get('selected');
    this.set('selected', state);
    this.sendAction('selectionUpdated', state);
  },
});
