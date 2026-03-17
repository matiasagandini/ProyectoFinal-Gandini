export const products = [
    {
        id: "1",
        title: "Pañales Pampers XG",
        price: 15999,
        category: "panales",
        stock: 8,
        img: "https://picsum.photos/600/400?random=11",
        description: "Pañales Pampers extra grandes, máxima absorción y comodidad."
    },
    {
        id: "2",
        title: "Toallitas Húmedas",
        price: 3999,
        category: "higiene",
        stock: 15,
        img: "https://picsum.photos/600/400?random=12",
        description: "Toallitas húmedas hipoalergénicas para piel sensible."
    },
    {
        id: "3",
        title: "Mamadera Anticólicos",
        price: 6999,
        category: "alimentacion",
        stock: 6,
        img: "https://picsum.photos/600/400?random=13",
        description: "Mamadera con sistema anticólicos y tetina de silicona."
    },
    {
        id: "4",
        title: "Crema para Rozaduras",
        price: 4999,
        category: "higiene",
        stock: 10,
        img: "https://picsum.photos/600/400?random=14",
        description: "Crema protectora contra irritaciones y rozaduras."
    }
];

// Promises con retardo (como pide la consigna)
export const getProducts = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(products), 800);
    });

export const getProductsByCategory = (categoryId) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(products.filter((p) => p.category === categoryId)), 800);
    });

export const getProductById = (itemId) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(products.find((p) => p.id === itemId)), 800);
    });