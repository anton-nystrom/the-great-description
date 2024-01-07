import firebase from '../../components/firebase';
import { getFirestore, collection, getDocs, onSnapshot } from "firebase/firestore";

const db = getFirestore(firebase);

export default async function handler(req: any, res: any) {
    const casinosRef = collection(db, 'casinos');
    const snapshot = await getDocs(casinosRef);
    const casinos = snapshot.docs.map(doc => {
        const url = doc.data().url;
        const data = {
            name: "casino",
            value: doc.id,
            label: doc.id,
            url: url,
        }
        return (data)
    });
    res.status(200).json(casinos);
}