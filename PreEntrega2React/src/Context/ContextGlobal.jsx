import { getFirestore, collection, getDocs } from "firebase/firestore"
import { createContext, useContext, useEffect, useState } from "react"
import { initializeApp } from "firebase/app"
import React from "react"

const firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "ecommercegorras-b2727.firebaseapp.com",
    projectId: "ecommercegorras-b2727",
    storageBucket: "ecommercegorras-b2727.appspot.com",
    messagingSenderId: "321336913345",
    appId: "1:321336913345:web:563419036e99ab60811340",
}

initializeApp(firebaseConfig)

export const GlobalContext = createContext([])

export const ContextGlobal = ({ children }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const db = getFirestore()
    const itemCollection = collection(db, "items")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(itemCollection)
                const itemsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setData(itemsData)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching items:", error)
            }
        }

        fetchData()
    }, [])

    return (
        <GlobalContext.Provider value={{ data, loading }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextGlobal
