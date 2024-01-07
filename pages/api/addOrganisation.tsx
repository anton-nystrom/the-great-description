import firebase from '../../components/firebase';
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase);

export default async function handler(req: any, res: any) {
    const name = req.body.name;
    const desc = req.body.desc;
    const data = {
        desc: desc
    }

    const organisationsRef = doc(db, "organisations", name);

    await setDoc(organisationsRef, data);
    res.status(200).json(data);
}
