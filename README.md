# fasteragile-select-button

An Ember CLI addon that provides a component to display a font-awesome based checkbox.

The icon was designed for a mobile application using ember-cli-ratchet, but
it should also work with webapps.

## Usage

```
// In your .hbs template
{{select-button selected=true selectedIcon='fa-check-circle' unselectedIcon='fa-circle-o'}}
```
Produces output similar to this:

![checkboxes](https://raw.githubusercontent.com/fasteragile/fasteragile-select-button/master/vendor/fasteragile-select-button-example.png)

## Actions Up

The select-button component emits "selectionUpdated" with a boolean argument
each time the toggle button is clicked.

## Installation

```
ember install fasteragile-select-button
```

OR

```
npm install fasteragile-select-button
```

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

Built with <3 by [FasterAgile](http://www.fasteragile.com).
