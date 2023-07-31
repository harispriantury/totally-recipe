import { FC } from 'react'

type TButton = {
    label: string
    handleClick: () => void
}

export const Button: FC<TButton> = ({ label, handleClick }) => {
    const onClick = () => {
        handleClick()
    }
    return (
        <div id='custom-button'>
            <button
                onClick={onClick}
                className='px-3 py-2 max-sm:px-1 rounded-lg bg-white text-yellow-950 hover:bg-slate-100 hover:scale-105 duration-100'>
                {label}
            </button>
        </div >
    )
}
