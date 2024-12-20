// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHgsEbSb1jgpa-4lz-8VZAmbJcNaLpmMc",
  authDomain: "ecommerce-d3396.firebaseapp.com",
  projectId: "ecommerce-d3396",
  storageBucket: "ecommerce-d3396.firebasestorage.app",
  messagingSenderId: "557359601472",
  appId: "1:557359601472:web:9ea236476c72fdcc460ca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtain all books
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "libros"));
    if (querySnapshot.empty) {
      console.log("No documents found");
      return [];
    }
    let products = querySnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return products;
  } catch (e) {
    console.error("Error getting documents:", e);
  }
}

// Obtain a book by its id
export const getProductById = async (id) => {
  try {
    const docRef = doc(db, "libros", id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      console.log("No such document!");
      return null;
    }
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } catch (e) {
    console.error("Error getting document:", e);
  }
}

// Obtain books by category
export const getProductsByCategory = async (genero) => {
  try {
    const q = query(collection(db, "libros"), where("genero", "==", genero));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No documents found");
      return [];
    }
    let products = querySnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return products;
  } catch (e) {
    console.error("Error getting documents:", e);
  }
}

// PostPurchase order 
export const postPurchase = async (order) => {
  const ordersCollection = collection(db, "ordenes");
  try {
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document:", e);
  }
}

// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// ==========================================================================================================
// populate db
const populateDB = async () => {
    const books = [
      {
        nombre: "En Agosto nos vemos",
        autor: "Gabriel García Márquez",
        precio: 19999,
        genero: "Ficción",
        img: "/img/libro1.webp",
        tapa: "blanda",
        paginas: 145,
        idioma: "español",
        stock: 5,
        sinopsis: "Cada mes de agosto Ana Magdalena Bach toma el transbordador hasta la isla donde está enterrada su madre para visitar la tumba en la que yace. Esas visitas acaban suponiendo una irresistible invitación a convertirse en una persona distinta durante una noche al año. Escrita en el inconfundible y fascinante estilo de García Márquez, En agosto nos vemos es un canto a la vida, a la resistencia del goce pese al paso del tiempo y al deseo femenino. Un regalo inesperado para los innumerables lectores del Nobel colombiano."
    },
    {
      nombre: "Por culpa de Miss Bridgerton",
      autor: "Julia Quinn",
      precio: 32200,
      genero: "Romance",
      img: "/img/libro2.webp",
      tapa: "blanda",
      paginas: 288,
      idioma: "español",
      stock: 14,
      sinopsis: "A veces el amor se encuentra en el lugar más inesperado… Aunque esta no es una de esas veces. Todo el mundo espera que Billie Bridgerton se case con uno de los hermanos Rokesby. Las dos familias han sido vecinas durante siglos y, durante la infancia, Billie se crió como una salvaje junto a Edward y Andrew. Cualquiera de ellos podría ser un marido perfecto para ella… algun día. Y a veces te enamoras exactamente de la persona que crees que deberías… O no. Solo hay un Rokesby que Billie no soporta en absoluto, y ese es George. Puede que sea el hijo mayor y el heredero del Condado, pero también es arrogante, insufrible, y ella esta absolutamente segura de que lo detesta. No puede ni verlo! Pero, en ocasiones, el destino tiene un malvado sentido del humor… Porque cuando Billie y George se encuentran y, literalmente, se ven obligados a estar juntos, algo nuevo sucede. La atracción surge y… si antes no podían ni verse, ahora tal vez no puedan vivir separados."
  },
  {
      nombre: "Blackwater (Parte III): La casa",
      autor: "Michael McDowell",
      precio: 14999,
      genero: "Terror",
      img: "/img/libro3.webp",
      tapa: "dura",
      paginas: 272,
      idioma: "español",
      stock: 11,
      sinopsis: "Perdido, 1928. El clan Caskey se desmorona con la cruenta guerra personal entre Mary-Love y Elinor. En los recovecos del caserón donde viven Elinor y Oscar se esconden crisis conyugales y existenciales con repercusiones que desafían la imaginación, mientras los peores recuerdos, aquellos que uno se esfuerza por mantener ocultos, acechan para tejer sus mortíferas redes y salir a flote."
  },
  {
      nombre: "La sangre manda",
      autor: "Stephen King",
      precio: 33199,
      genero: "Terror",
      img: "/img/libro4.webp",
      tapa: "blanda",
      paginas: 464,
      idioma: "español",
      stock: 9,
      sinopsis: "Stephen King nos brinda cuatro novelas cortas sobre las fuerzas ocultas que nos acechan. En esta colección única nos ofrece un impactante noir paranormal, protagonizado por la carismática Holly Gibney, así como tres relatos más que ponen de manifiesto el incomparable talento, la imaginación sin par y la diversidad de registros de este legendario narrador. La crítica dijo: «Las cuatro historias que componen esta edición nos muestran a King, el maestro del terror, en todo su esplendor». Publishers Weekly «El King de siempre: un placer para sus incontables fans y un buen punto de partida si todavía no lo conoces». Kirkus Reviews «Te mantendrá en vela, absorto en estas cuatro narraciones acerca de nuestros sueños y debilidades». USA Today «Excepcionalmente absorbentes, estas historias confirman a King como el maestro del género». The Washington Post"
  },
  {
      nombre: "Pride and Prejudice",
      autor: "Jane Austen",
      precio: 24900,
      genero: "Romance",
      img: "/img/libro5.webp",
      tapa: "dura",
      paginas: 450,
      idioma: "inglés",
      stock: 7,
      sinopsis: "La señora Bennet ha criado a sus cinco hijas con el único deseo de encontrar marido. La llegada al vecindario de Charles Bingley, un joven rico y soltero, con algunas amistades despierta el interés de las hermanas Bennet y de las familias vecinas, que verán una excelente oportunidad para cumplir su propósito."
  }
  ]
  try {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "libros");

    books.forEach((book) => {
      const docRef = doc(collectionRef);
      batch.set(docRef, book);
    });

    await batch.commit();
    console.log("Database populated successfully!");
  } catch (error) {
    console.error("Error populating database:", error);
  }
  
}
//populateDB();