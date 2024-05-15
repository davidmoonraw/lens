require('dotenv').config({ path: '../.env' });
const { EXPRESS_PORT } = process.env;

describe('Environment variables', () => {
    describe('Express connection port', () => {
        test('Port is a defined number in environment variables', () => {
            const isNumber = typeof(parseInt(EXPRESS_PORT)) === 'number';
            expect(isNumber).toBeTruthy();
        });
    });
});