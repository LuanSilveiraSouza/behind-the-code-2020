const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const records = require('../records.json');

(async function main() {
    const csvWriter = createCsvWriter({
        path: '../file.csv',
        header: [
            {id: 'Tempo', title: 'Tempo'},
            {id: 'Estação', title: 'Estação'},
            {id: 'LAT', title: 'LAT'},
            {id: 'LONG', title: 'LONG'},
            {id: 'Movimentação', title: 'Movimentação'},
            {id: 'Original_473', title: 'Original_473'},
            {id: 'Original_269', title: 'Original_269'},
            {id: 'Zero', title: 'Zero'},
            {id: 'Maçã-Verde', title: 'Maçã-Verde'},
            {id: 'Tangerina', title: 'Tangerina'},
            {id: 'Citrus', title: 'Citrus'},
            {id: 'Açaí-Guaraná', title: 'Açaí-Guaraná'},
            {id: 'Pêssego', title: 'Pêssego'},
            {id: 'TARGET', title: 'TARGET'},
        ]
    })

    await csvWriter.writeRecords(records);

})();
