//Async / await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes ... espere...');

        setTimeout(() => {
            resolve('Los clientes fuern descargados');
        }, 5000);
    });
}
async function app() {
    try {
        const resultad = await descargarNuevosClientes();
        console.log(resultad);
    } catch (error) {
        console.log(error);
    }
}

app();