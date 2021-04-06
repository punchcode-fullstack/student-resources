const fs = require('fs')
fs.writeFile('./public/CNAME', 'js-intro.surge.sh', (err) => {
    if (err) throw err;
    console.log('Saved!');
})