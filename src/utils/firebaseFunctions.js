// saving new item

import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

export const saveItem = async (data) => {
    //setDoc method from firestore helps to set new value if there is no value it creates it if it is already there it updates it.
    await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, { merge : true }  // data and merge are opptional in future if we are adding one more field to merge those fields we those both
    ); 
    //doc method is used to create document the collections we create is fooditems if this collection is not there it creates one if it is already there it will open the collection and inster our document into the collection
};


//get all food items
export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection( firestore, 'foodItems'), orderBy('id', 'desc')) //we are querying the collection from firestore and ording it by ID in the DESCENDING order so that the items that we add last will be shown first.
    );

    return items.docs.map((doc) => doc.data());
};