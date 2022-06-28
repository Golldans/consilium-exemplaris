const fs = require('fs');

try {
    const data = fs.readFileSync('./file.ts', 'utf8');

    if (fs.existsSync('./new_file.ts')) {
        fs.unlinkSync('./new_file.ts');
    }

    fs.writeFileSync('./new_file.ts', data, error => {
        if (error) console.log(error);
    });
    console.log(data);
} catch (error) {
    console.log(error);
}