# winston-transport-mattermost

> A Winston @3.x transport for [Mattermost](https://mattermost.com/).

## Install

```bash
npm install winston-transport-mattermost
```

## Usage

```js
const winston = require('winston')
const MattermostTransport = require('winston-transport-mattermost')

const logger = winston.createLogger({
  transports: [
    new MattermostTransport({
      webhook_url: 'https://your.mattermost.com/hooks/334ktjodu7gq5yq7afj3w',
      username: 'logger name',
      icon_url: 'https://www.mattermost.org/wp-content/uploads/2016/04/icon.png',
      level: 'error'
    })
  ]
});
```

## Motivation
The other mattermost transport packages have too many dependencies and are not compatible with version @3.x.

## License
[MIT](./LICENSE).
