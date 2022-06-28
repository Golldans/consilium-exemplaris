const fs = require('fs');

try {
    const model = fs.readFileSync('./file.ts', 'utf8');

    if (fs.existsSync('./new_file.ts')) {
        fs.unlinkSync('./new_file.ts');
    }

    fs.writeFileSync('./new_file.ts', model, error => {
        if (error) console.log(error);
    });
    const basic_model_data = model.split('{\r\n')[1].split('  }');
    const model_data = ''.concat(basic_model_data.slice(0, basic_model_data.length - 1));

    const model_items = model_data.split('\r\n');

    const trimmed_model_items = model_items.map((item) => item.trim());

    const model_property = trimmed_model_items.map((item) => item.slice(0, item.indexOf('  ')));
    const model_type = trimmed_model_items.map((item) => item.slice(item.indexOf('  ') + 1).trim());
    const trimmed_model_type = model_type.map((item) => item.slice(0, (item.indexOf('@') ?? item.length)).trim());

    model_property.map((property, index) => {
        console.log(`A propriedade ${property} é do tipo ${trimmed_model_type[index]}`)
    })
} catch (error) {
    console.log(error);
}