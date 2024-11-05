module.exports = ({ strapi }) => ({
    async getLikes(ctx) {
        const { id } = ctx.params; // Obtener el ID del post desde los parámetros de la solicitud
        console.log(id); // Imprimir el ID del post en la consola
        try {

            const post = await strapi.documents('api::post.post').findOne({
                documentId: id,
                populate: ['likes'],
            })

            if (!post) {
                return ctx.notFound('Post not found'); // Manejo de error si el post no existe
            }

            post.likes = post.likes.map(like => like.name); // Mapear los likes del post a un array de objetos con el ID de usuario

            return post; // Devolver los likes del post

        } catch (error) {
            return ctx.badRequest(error.message); // Manejo de error si hay algún error en la solicitud
        }

    },
});