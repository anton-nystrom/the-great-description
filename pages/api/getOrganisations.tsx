import firebase from '../../components/firebase';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase);

export default async function handler(req: any, res: any) {
    const organisationsRef = collection(db, 'organisations');
    const snapshot = await getDocs(organisationsRef);
    const organisations = snapshot.docs.map(organisation => {
        const desc = organisation.data().desc;
        const data = {
        name: "organisation",
        value: desc,
        label: organisation.id,
        }
        return (data)
    });
    res.status(200).json(organisations);
}