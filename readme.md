# Taus

Fast check host http status.

## Install

```
npm i taus --save
```

## How to use?

```js
var taus = require('taus');

taus('http://cloudcmd.io', function(error, status) {
    if (error)
        console.error(error.message);
    else
        console.log(status);
        /* 200 */
});
```

## License

MIT
