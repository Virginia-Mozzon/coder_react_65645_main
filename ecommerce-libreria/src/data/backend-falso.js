const base_de_datos = [
    {
        id: "libro-01-9789500770224",
        nombre: "En Agosto nos vemos",
        autor: "Gabriel García Márquez",
        precio: 19999,
        genero: "ficción",
        img: "/img/libro1.webp",
        tapa: "blanda",
        paginas: 145,
        idioma: "español",
        sinopsis: "Cada mes de agosto Ana Magdalena Bach toma el transbordador hasta la isla donde está enterrada su madre para visitar la tumba en la que yace. Esas visitas acaban suponiendo una irresistible invitación a convertirse en una persona distinta durante una noche al año. Escrita en el inconfundible y fascinante estilo de García Márquez, En agosto nos vemos es un canto a la vida, a la resistencia del goce pese al paso del tiempo y al deseo femenino. Un regalo inesperado para los innumerables lectores del Nobel colombiano."
    },
    {
        id: "libro-02-9789878454078",
        nombre: "Por culpa de Miss Bridgerton",
        autor: "Julia Quinn",
        precio: 32200,
        genero: "romance",
        img: "/img/libro2.webp",
        tapa: "blanda",
        paginas: 288,
        idioma: "español",
        sinopsis: "A veces el amor se encuentra en el lugar más inesperado… Aunque esta no es una de esas veces. Todo el mundo espera que Billie Bridgerton se case con uno de los hermanos Rokesby. Las dos familias han sido vecinas durante siglos y, durante la infancia, Billie se crió como una salvaje junto a Edward y Andrew. Cualquiera de ellos podría ser un marido perfecto para ella… algun día. Y a veces te enamoras exactamente de la persona que crees que deberías… O no. Solo hay un Rokesby que Billie no soporta en absoluto, y ese es George. Puede que sea el hijo mayor y el heredero del Condado, pero también es arrogante, insufrible, y ella esta absolutamente segura de que lo detesta. No puede ni verlo! Pero, en ocasiones, el destino tiene un malvado sentido del humor… Porque cuando Billie y George se encuentran y, literalmente, se ven obligados a estar juntos, algo nuevo sucede. La atracción surge y… si antes no podían ni verse, ahora tal vez no puedan vivir separados."
    },
    {
        id: "libro-03-9789878453538",
        nombre: "Blackwater (Parte III): La casa",
        autor: "Michael McDowell",
        precio: 14999,
        genero: "terror",
        img: "/img/libro3.webp",
        tapa: "dura",
        paginas: 272,
        idioma: "español",
        sinopsis: "Perdido, 1928. El clan Caskey se desmorona con la cruenta guerra personal entre Mary-Love y Elinor. En los recovecos del caserón donde viven Elinor y Oscar se esconden crisis conyugales y existenciales con repercusiones que desafían la imaginación, mientras los peores recuerdos, aquellos que uno se esfuerza por mantener ocultos, acechan para tejer sus mortíferas redes y salir a flote."
    },
    {
        id: "libro-04-9789877256031",
        nombre: "La sangre manda",
        autor: "Stephen King",
        precio: 33199,
        genero: "terror",
        img: "/img/libro4.webp",
        tapa: "blanda",
        paginas: 464,
        idioma: "español",
        sinopsis: "Stephen King nos brinda cuatro novelas cortas sobre las fuerzas ocultas que nos acechan. En esta colección única nos ofrece un impactante noir paranormal, protagonizado por la carismática Holly Gibney, así como tres relatos más que ponen de manifiesto el incomparable talento, la imaginación sin par y la diversidad de registros de este legendario narrador. La crítica dijo: «Las cuatro historias que componen esta edición nos muestran a King, el maestro del terror, en todo su esplendor». Publishers Weekly «El King de siempre: un placer para sus incontables fans y un buen punto de partida si todavía no lo conoces». Kirkus Reviews «Te mantendrá en vela, absorto en estas cuatro narraciones acerca de nuestros sueños y debilidades». USA Today «Excepcionalmente absorbentes, estas historias confirman a King como el maestro del género». The Washington Post"
    },
    {
        id: "libro-05-9789878304205",
        nombre: "Pride and Prejudice",
        autor: "Jane Austen",
        precio: 24900,
        genero: "romance",
        img: "/img/libro5.webp",
        tapa: "dura",
        paginas: 450,
        idioma: "inglés",
        sinopsis: "La señora Bennet ha criado a sus cinco hijas con el único deseo de encontrar marido. La llegada al vecindario de Charles Bingley, un joven rico y soltero, con algunas amistades despierta el interés de las hermanas Bennet y de las familias vecinas, que verán una excelente oportunidad para cumplir su propósito."
    }
]

export const getProducts = () => {
    return new Promise( (res, rej) => {
        setTimeout( ()=> {
            res(base_de_datos);
            rej("error") 
        }, 1500);
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

export const getProductById = (id) => {
    return base_de_datos.find( (prod) => prod.id == id )
}