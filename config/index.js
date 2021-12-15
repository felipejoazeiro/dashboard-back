module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "ASD76SAD5SA76D56S7ADSA5DM7ASDASD5M6ASDAS5DANFGDA",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com" : "http://localhost:3000",
}