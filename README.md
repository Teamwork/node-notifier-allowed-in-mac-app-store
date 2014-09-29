# node-notifier-allowed-in-mac-app-store [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

A node module for sending notification using node. Uses terminal-notifier on mac,
notify-send for Linux and growl for others. This is just a fork from [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier)@3.0.0 except with [alloy/terminal-notifier](alloy/terminal-notifier)@1.5.0 instead of 1.6.0.


## Install
```
$ npm install node-notifier-allowed-in-mac-app-store
```

## Standard Usage
See [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier).

## Don't use with node-webkit
We originally created this for use with node-webkit. You should now use node-webkit's built-in notifications (at least for Mac) instead. See https://github.com/rogerwang/node-webkit/issues/27#issuecomment-46265482 for more info.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/node-notifier-allowed-in-mac-app-store
[npm-image]: https://badge.fury.io/js/node-notifier-allowed-in-mac-app-store.png

[travis-url]: http://travis-ci.org/Teamwork/node-notifier-allowed-in-mac-app-store
[travis-image]: https://secure.travis-ci.org/Teamwork/node-notifier-allowed-in-mac-app-store.png?branch=master

[depstat-url]: https://david-dm.org/teamwork/node-notifier-allowed-in-mac-app-store
[depstat-image]: https://david-dm.org/teamwork/node-notifier-allowed-in-mac-app-store.png
