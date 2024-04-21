// tests/index.test.js

const parseQuery = require('../step03/src/queryParser');

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'sample'
    });
});

test('Invalid Query Format', () => {
    const invalidQuery = 'SELECT id, name';
    expect(() => parseQuery(invalidQuery)).toThrow('Invalid query format');
});
