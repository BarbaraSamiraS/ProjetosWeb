const { ad, zero, apagarTudo, del, resul} = require('../funtions.js')

test('Adicionar Digito', ()=>{
     expect(ad("2","5")).toBe("25")
});

test('Adicionar Zero', ()=>{
     expect(zero("25")).toBe("250")
});

test('Apagar Tudo', ()=>{
     expect(apagarTudo()).toBe("")
});

test('delete', ()=>{
     expect(del("25")).toBe("2")
});

test('resultado', ()=>{
     expect(resul("6/2")).toBe("3")
});

test('Testando error de divisão 0/0', () => {
  expect(() => {
    resul("0/0");
  }).toThrow("Não é possivel divisão de 0 por 0.");
});

test('Testando error de conta invalida', () => {
  expect(() => {
    resul("6/2*");
  }).toThrow("Error com a conta");
});


