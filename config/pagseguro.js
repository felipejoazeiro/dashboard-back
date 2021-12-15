module.exports = {
    mode: process.env.NODE_ENV === "production" ? "live" : "sandbox",
    sandbox: process.env.NODE_ENV === "production" ? false: true,
    sandbox_email: process.env.NODE_ENV === "production" ? null: "c41600145421480040557",
    email: "modelo.ecom@gmail.com",
    token: "4D64D4E42F7B467A8E7320A8364427AB",
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao",
    
}