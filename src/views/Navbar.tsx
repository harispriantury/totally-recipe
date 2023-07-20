import React, { useState } from "react"
import { Button } from "./components/Button"
import { useNavigate } from "react-router-dom"

type TNavbar = {
    handleSubmit: (query: string) => void
}

export const Navbar: React.FC<TNavbar> = ({ handleSubmit }) => {
    const navigate = useNavigate();

    const [query, setQuery] = useState<string>('')

    const onSUbmit = (query: string) => {
        navigate('/')
        handleSubmit(query)
    }
    return (
        <div>
            <div id="Navbar" className="flex justify-center">
                <div className="w-10/12 bg-[#8D7B68] p-10 flex justify-between max-sm:justify-center items-center">
                    <h1
                        className="italic max-sm:hidden text-white text-3xl cursor-pointe rounded-lg"
                        style={{
                            fontFamily: 'Pacifico'
                        }}>Totally Recipe</h1>
                    <div className="flex gap-4">
                        <div className="flex gap-3 relative max-sm:w-full">
                            <input
                                value={query}
                                type="text"
                                placeholder="Search Food"
                                className="border outline-[8D7B68] px-3 py-2 rounded-md"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                            />
                            <button className="absolute right-3 top-2 hover:scale-125" onClick={() => onSUbmit(query)}>🔎</button>
                        </div>
                        {
                            location.pathname.includes('detail') && (
                                <Button label="Back" handleClick={() => { navigate('/') }} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}