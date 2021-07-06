export default {
    name: 'ratings',
    title: 'Ratings',
    type: 'document',
    fields: [
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'star',
        title: 'Star',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'rating',
        title: 'rating',
        type: 'number'
      }
    ],
  }
  