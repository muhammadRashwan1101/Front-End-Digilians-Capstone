import { useEffect, useState } from "react";
import CategoryContext from "./categoryContext";
import api from "../apis/axios";

export default function CategoryProvider({children}) {
    const [categories, setCategories] = useState([]);

useEffect(()=> {
    const getCategories = async () => {
        try {
            const response = await api.get("categories");
            console.log(response.data.categories);
            setCategories(response.data.categories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }
    getCategories();
}, [])
    return (
        <CategoryContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoryContext.Provider>
    )
}