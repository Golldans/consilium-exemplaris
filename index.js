const fs = require('fs');

try {
    const model = fs.readFileSync('./file.ts', 'utf8');

    if (fs.existsSync('./new_file.ts')) {
        fs.unlinkSync('./new_file.ts');
    }

    const [model_name, model_data] = model.split(' {');

    const entity_name = model_name.slice( 6, model_name.length);

    const data_rows = model_data.split('\r\n').map((row) => row.trim());

    const data_columns = data_rows.map((row) => {
        const column = row.slice(0, row.indexOf(' ')).trim();
        const next_type = row.slice(column.length, row.length).trim();
        const type = next_type.slice(0, next_type.indexOf(' ')).trim();

        const next_notation = next_type.slice(type.length, next_type.length).trim();
        const notation = next_notation.slice(0, (next_notation.indexOf(' ') > 0 ? next_notation.indexOf(' ') : next_notation.length)).trim();

        return {column, type, notation};
    })

    data_columns.pop();
    data_columns.shift();

    const new_model = createTypeORMEntity(data_columns, entity_name);

    fs.writeFileSync('./new_file.ts', new_model, error => {
        if (error) console.log(error);
    });
} catch (error) {
    console.log(error);
}

function createTypeORMEntity(items, entity) {

    const type_mapper = {
        Int: 'number',
        String: 'string',
        DateTime: 'Date',
        Float: 'number',
        Boolean: 'boolean',
    }

    return `

    import {
        Column,
        CreateDateColumn,
        DeleteDateColumn,
        Entity,
        PrimaryGeneratedColumn,
        UpdateDateColumn,
      } from 'typeorm';

    @Entity({ name: '${entity}' })
    export class ${entity} {
        ${
            items.map((item, index) => {

                let optional = false;
                if (item.type.slice(item.type.length -1, item.type.length) == '?') {
                    optional = true;
                    item.type = item.type.slice(0, item.type.length - 1);
                }

                const notation = handleNotation(item.notation);
                console.log(notation);

                if (index == 0) {
                    return `
                    @PrimaryGeneratedColumn()
                    ${item.column}: ${type_mapper[item.type] ?? 'any'};
                    `;
                }

                return `
                @Column({
                    ${notation ? `type: '${notation}',` : ''}
                    nullable: ${optional},
                    name: '${item.column}'
                })
                ${item.column}: ${type_mapper[item.type] ?? 'any'}
                `;
            }).join('')
        }
    }
    `
}

function handleNotation(notation) {

    const notation_mapper = {
        NVarChar: 'varchar',
        Money: 'numeric',
        Text: 'text',
        TinyInt: 'tinyint',
        SmallInt: 'smallint',
        DateTime: 'datetime',
        VarBinary: 'varbinary',
        Char: 'char'
    }

    const unmasked_notation = notation.slice(4, notation.length);

    if(unmasked_notation.length == 0) {
        return notation_mapper[unmasked_notation];
    }
    if(unmasked_notation.indexOf('(') < 0) {
        return notation_mapper[unmasked_notation];
    }

    const notation_value = unmasked_notation.slice(unmasked_notation.indexOf('('), unmasked_notation.length)
    const new_notation = unmasked_notation.slice(0, (unmasked_notation.indexOf('(')));

    if (notation_mapper[new_notation]) {
        return notation_mapper[new_notation];
    }
    return null;
}