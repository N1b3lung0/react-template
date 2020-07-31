import '@testing-library/jest-dom';

describe('Test in demo.test.js', () => {

    test('should be equals the strings', () => {
    
        // 1. Arrange (Inicialización)
        const message = 'Hello world';
    
        // 2. Act (Estímulo)
        const message2 = `Hello world`;
    
        // 3. Assert (Observar el comportamiento)
        expect(message).toBe(message2); // ===
        
    })

});

