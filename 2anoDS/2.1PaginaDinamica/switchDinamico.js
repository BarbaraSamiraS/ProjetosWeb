import http from 'http'
import url from 'url'
import fs from 'fs'
 
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('switchDinamico.html',(err,arquivo)=>{

        res.writeHead(200,"Content-Type", "text/html");
        res.write(arquivo)

    const urlInfo = url.parse(req.url, true);
    const p = parseInt(urlInfo.query.p);

    

    if (!p || isNaN(p)) {
        res.end("Por favor, forneça um número válido para a 'placa'");
    } else {
        let message;

        switch (p % 10) {
            case 1:
            case 2:
                message = "Não circulam na segunda-feira";
                break;
            case 3:
            case 4:
                message = "Não circulam na terça-feira";
                break;
            case 5:
            case 6:
                message = "Não circulam na quarta-feira";
                break;
            case 7:
            case 8:
                message = "Não circulam na quinta-feira";
                break;
            case 9:
            case 0:
                message = "Não circulam na sexta-feira";
                break;
            default:
                message = "Data inválida";
                break;
        }

        return res.end(`<h1>${message}</h1>`);
    }
    })

    
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});
