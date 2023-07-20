/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { getData } from "../services/services";
import { Navbar } from "./Navbar";
import { LoadingLayer } from "./components/LoadingLayer";
import { IHits } from "../interfaces/recipe";
import { Route, Routes } from "react-router-dom";
import { List } from "./List";
import { Detail } from "./Detail";

export const Home = () => {
    const [menus, setMenus] = useState<IHits[]>([])
    const [isLoading, setIsloading] = useState<boolean>(false)

    const handleSubmit = async (query: string) => {
        setIsloading(true)
        const response = await getData(query);
        if (response?.data) {
            const { hits } = response.data
            const result = hits as IHits[]
            setMenus(result)
        }
        setIsloading(false)
    }


    return (
        <div >
            {
                isLoading && (<LoadingLayer />)
            }
            <Navbar handleSubmit={handleSubmit} />
            <Routes>
                <Route path="/" element={<List menus={menus} />} />
                <Route path="detail/:id" element={<Detail />} />
            </Routes>
        </div>
    )
}