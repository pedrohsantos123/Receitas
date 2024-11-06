import { db } from "../firebase.js";
import { collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

// Criar produto
export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    await addDoc(collection(db, "products"), data);
    res.status(200).send("Produto criado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Listar todos os produtos
export const getProducts = async (req, res) => {
  try {
    const productsSnapshot = await getDocs(collection(db, "products"));
    const products = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Obter um produto específico
export const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productDoc = await getDoc(doc(db, "products", id));
    if (productDoc.exists()) {
      res.status(200).json({ id: productDoc.id, ...productDoc.data() });
    } else {
      res.status(404).send("Produto não encontrado!");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Atualizar produto
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await updateDoc(doc(db, "products", id), data);
    res.status(200).send("Produto atualizado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Deletar produto
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, "products", id));
    res.status(200).send("Produto deletado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
