import fs from 'fs'

export function readFile(dateiPfad, callback) {
    return fs.readFile(dateiPfad, 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Lesen der Datei:', err);
            return;
        }
        //console.log('Dateiinhalt:', data);
        callback(splitStringPerLine(data));
    });
}

function splitStringPerLine(input) {
    return input.split('\n').filter(Boolean)
}
