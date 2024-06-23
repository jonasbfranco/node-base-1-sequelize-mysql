const app = require('./app')

PORT = (process.env.PORT || 3000)
//console.log(process.env.PORT)

app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`)
});
