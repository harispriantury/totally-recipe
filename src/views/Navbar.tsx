import React from "react"
import { Button } from "./components/Button"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelectror } from "../store/hooks"
import { changeValue } from "../store/search"

type TNavbar = {
    handleSubmit: (query: string) => void
}

export const Navbar: React.FC<TNavbar> = ({ handleSubmit }) => {
    const value = useAppSelectror((state) => state.search.value)
    const dispatch = useAppDispatch()


    const navigate = useNavigate();

    const onSUbmit = (query: string) => {
        navigate('/')
        handleSubmit(query)
    }
    return (
        <div>
            <div id="Navbar" className="flex justify-center">
                <div className="w-10/12 max-sm:w-full bg-[#8D7B68] p-10 flex justify-between max-sm:justify-center items-center">
                    <h1
                        className="italic max-sm:hidden text-white text-3xl cursor-pointe rounded-lg"
                        style={{
                            fontFamily: 'Pacifico'
                        }}>Totally Recipe</h1>
                    <div className="flex gap-4 max-sm:gap-1">
                        <div className="flex gap-3 relative max-sm:w-full">
                            <input
                                value={value}
                                type="text"
                                placeholder="Search Food"
                                className="border outline-[8D7B68] max-sm:px-0 max-sm:w-10/12 px-3 py-2 rounded-md"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeValue(e.target.value))}
                            />
                            <button className="absolute right-3 max-sm:right-0 top-2 hover:scale-125" onClick={() => onSUbmit(value)}>🔎</button>
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