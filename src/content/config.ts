import { defineCollection, reference, z } from 'astro:content';


const blogColletion = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image(),

        //relación
        // author: z.string(),
        author: reference('author'),

        //relación
        tags: z.array(z.string()),

        //Boolean
        isDraft : z.boolean().default(false), 
    })
});


const authorCollection = defineCollection({
    type: 'data',
    schema:({image})=> z.object({
        name: z.string(),
        avatar: image(),
        subtitle: z.string(),
        twitter: z.string(),
        linkedIn: z.string(),
        github: z.string(),
        bio: z.string(),
    })
})


// si ponemos la propiedad blog debemos de crear una carpeta con el mismo nombre dentro de la carpeta content en donde esta tendra todo los archivos MD, Mdx, etc que se requieran cargar
export const collections = {
    blog: blogColletion,
    author: authorCollection
}