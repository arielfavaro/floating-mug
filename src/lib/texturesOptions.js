const texturesOptions = [
    {
        name: 'Coffee and Contemplation',
        icon: 'coffee-002.jpg',
        file: 'coffee-002.jpg',
        isActive: true,
    },
    {
        name: 'Retrowave',
        icon: 'retrowave-002.jpg',
        file: 'retrowave-002.jpg',
        isActive: true,
    },
    {
        name: 'Quattromani',
        icon: 'qmd.jpg',
        file: 'qmd.jpg',
        isActive: true,
    },
].filter(item => item.isActive);

export { texturesOptions }