import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const createOrder = async (order) => {
    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
};

export const getProducts = async () => {
    const productsCollection = collection(db, "products");
    const snapshot = await getDocs(productsCollection);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};

export const getProductsByCategory = async (categoryId) => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("category", "==", categoryId));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};

export const getProductById = async (itemId) => {
    const productDoc = doc(db, "products", itemId);
    const snapshot = await getDoc(productDoc);

    if (!snapshot.exists()) {
        return null;
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
};