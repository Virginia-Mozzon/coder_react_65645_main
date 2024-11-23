const base_de_datos = [
    {
        id: "554321",
        nombre: "libro 1",
        precio: 5500,
        genero: "romance",
        img: "/img/libro1.webp"
    },
    {
        id: "998765",
        nombre: "libro 2",
        precio: 6000,
        genero: "ficcion",
        img: "/img/libro2.webp"
    },
    {
        id: "332198",
        nombre: "libro 3",
        precio: 4500,
        genero: "terror",
        img: "/img/libro3.webp"
    }
]

export const getProducts = () => {
    return new Promise( (res, rej) => {
        setTimeout( ()=> {
            res(base_de_datos);
            rej("error") 
        }, 3000);
    })
}

export const getProductsByCategory = (genero) => {
    return new Promise( (res, rej) => {
        setTimeout( ()=> {
            res(base_de_datos.filter(e => e.genero === genero));
            rej("error") 
        }, 3000);
    })
}