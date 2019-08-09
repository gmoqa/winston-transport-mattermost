# winston-transport-mattermost

> A Winston @3.x transport for [Mattermost](https://mattermost.com/).

[![NPM](https://nodei.co/npm/winston-transport-mattermost.png)](https://nodei.co/npm/winston-transport-mattermost/)

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
      level: 'error',
      webhook_url: 'https://your.mattermost.com/hooks/334ktjodu7gq5yq7afj3w',
      username: 'logger name',
      icon_url: 'https://example.com/icon.png'
    })
  ]
})

logger.error('Something happened!')

```

## Config
* __webhook_url:__ (Required) Mattermost Incoming Webhook URL.
* __username:__ (Default **Winston**) Who sends the message.
* __icon_url:__ (Default **Adorable avatars**) Public image URL for user avatar.

## Screenshots

<img src="https://user-images.githubusercontent.com/1767051/62671566-6216af00-b965-11e9-8a71-d8b7144740f1.png" width="400">

## Motivation
The other mattermost transport packages have too many dependencies and are not compatible with Winston @3.X, and don't allow to customize the name or avatar of the message.

## License
[MIT](./LICENSE)
