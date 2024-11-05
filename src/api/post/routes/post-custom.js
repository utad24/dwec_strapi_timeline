module.exports = {
    routes: [
        {
            method: 'GET', // Método HTTP
            path: '/post-likes/:id', // Ruta personalizada
            handler: 'post-custom.getLikes',
        },
    ],
};