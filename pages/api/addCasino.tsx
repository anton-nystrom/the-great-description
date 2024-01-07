import firebase from '../../components/firebase';
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase);

async function add(scraped: any) {
    scraped.forEach(async (scrape: { name: any; url: any; }) => {
        const name = scrape.name;
        const url = scrape.url;
        const data = {
            url: url
        }
    
        const casinoRef = doc(db, "casinos", name);
    
        await setDoc(casinoRef, data);
    });
}

export default async function handler(req: any, res: any) {
    const name = req.body.name;
    const url = req.body.url;
    const data = {
        url: url
    }

    const casinoRef = doc(db, "casinos", name);

    await setDoc(casinoRef, data);
    res.status(200).json(data);
}
