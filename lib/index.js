/*
 * Mattermost Transport for Winston 3+
 * (C) 2019 Guillermo Quinteros
 * MIT LICENSE
 *
 */
const winston = require('winston');
const Transport = require('winston-transport');
const https = require('https');

// Ensure we have the correct winston here.
if (Number(winston.version.split('.')[0]) < 3) {
    throw new Error('WinstonMattermost requires winston >= 3.0.0');
}

class WinstonMattermostTransport extends Transport {
    // Expose the name of this Transport on the prototype
    static get name() {
        return 'WinstonMattermost';
    }

    constructor(options = {}) {
        super(options);

        if (!options.webhook_url) {
            throw new Error('webhook_url must be defined.');
        }

        this.setOptions(options);
    }

    setOptions(options) {
        this.url = new URL(options.webhook_url);
        this.username = options.username || 'Winston';
        this.icon_url = options.icon_url || 'https://api.adorable.io/avatars/100/' + Math.random();
    }

    log(info, callback) {
        const data = JSON.stringify({
            username: this.username,
            icon_url: this.icon_url,
            text: info.message
        });

        const options = {
            hostname: this.url.hostname,
            path: this.url.pathname,
            method: 'POST'
        };

        const req = https.request(options);

        req.on('error', (e) => {
            console.error(e);
        });

        req.write(data);
        req.end();
        callback(null, true);
    }
}

module.exports = WinstonMattermostTransport;
