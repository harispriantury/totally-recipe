import { FC } from "react"
import { RingSpinner } from "react-spinner-overlay"


export const LoadingLayer: FC = () => {
    return (
        <div id="LoadingOverlay" className="fixed top-0 right-0 w-screen h-screen bg-black opacity-30">
            <div className="w-screnn h-screen flex flex-col gap-4 justify-center items-center">
                <RingSpinner color="white" />
            </div>
        </div>
    )
}