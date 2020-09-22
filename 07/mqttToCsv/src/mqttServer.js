const mqtt = require('mqtt');
const fs = require('fs');

(async function main() {
    const client = mqtt.connect('mqtt://tnt-iot.maratona.dev', {
    port: 30573,
    username: 'maratoners',
    password: 'ndsjknvkdnvjsbvj',
    });

    const records = [];

    client.on('connect', () => {
        console.log('Connected');
        client.subscribe('tnt', (err) => {
            if(err) throw err;
            console.log('Subscribed');
        });
    })

    client.on('message', async (topic, msg) => {
        records.push(JSON.parse(msg.toString()));


        if(records.length > 1500) {
            console.log(records);
            await fs.appendFileSync('records.json', JSON.stringify(records));
            client.end();
        }
    })
})();
