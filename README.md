MBKit
==============================================================================

This ember addon was created from the idea of [MBKit](https://github.com/mindbody/mbkit) which was built for react. Wanted to be able to use the styles from there but as ember components instead of react componetns


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

Requirements
------------------------------------------------------------------------------

You need to be using sass in your project. If you are not you have to install it

```
ember install ember-cli-sass
```

You then will need to rename `app/styles/app.css` to `app/styles/app.scss`

Installation
------------------------------------------------------------------------------

```
ember install mbkit-ember
```

Usage
------------------------------------------------------------------------------

In your `app.scss` file, you will need to import our sass file

```
@import 'mbkit-ember';
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
