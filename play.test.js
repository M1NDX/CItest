function len(valor){
    return valor.length;
}

test(' solo para ver si funciona jest', ()=>{
    //throw new Error("no paso");
    expect({name:"hola"}).toEqual({name:"hola"});
})

test('Funciona len', ()=>{
    let testV = [1,4,"a"];
    expect(len(testV)).toBeGreaterThanOrEqual(0);
    expect(len(testV)).toBe(3);
    expect(len(testV)).toBeDefined();
})

describe('Probar que funciona len', ()=>{
    let testV = [1,4,"a"];
    test('regresa positivo', ()=>{
        expect(len(testV)).toBeGreaterThanOrEqual(0);
    })

    test('valor correcto', ()=>{
        expect(len(testV)).toBe(3);
    })

})

// test('código asíncrono', (done)=>{
//     setTimeout(()=>{
//         let res = "hola"
//         expect(res).toBe("hola2");
//         done()
// },2000)
// })