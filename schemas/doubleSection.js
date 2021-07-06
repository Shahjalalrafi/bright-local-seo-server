export default {
    name: 'doubleSection',
    title: 'DoubleSection',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'list',
            title: 'List',
            type: 'array',
            of: [
                {
                    title: 'List',
                    name: 'list',
                    type: 'object',
                    fields: [
                        {
                            title: 'List',
                            name: 'Listfield',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ],
}
