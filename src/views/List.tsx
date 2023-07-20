import { FC } from 'react'
import { IHits } from '../interfaces/recipe'
import { Button } from './components/Button'
import { useNavigate } from 'react-router-dom'

type TList = {
    menus: IHits[]
}

export const List: FC<TList> = ({ menus }) => {
    const navigate = useNavigate()
    const handleClickDetail = (path: string) => {
        const splitStart = path.split('https://api.edamam.com/api/recipes/v2/')[1]
        const pathId = splitStart.split('?')[0]

        navigate(`detail/${pathId}`)
    }
    return (
        <div className="flex justify-center w-full">
            <div className="bg-white w-10/12 max-md:w-full flex flex-col justify-center">
                <h1 className="text-center text-4xl font-semibold p-10 text-[#8D7B68]">Menu List</h1>
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 w-full p-6">
                    {
                        menus.length > 0 ?
                            menus.map((item: IHits, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="bg-[#F1DEC9] flex flex-col gap-4 items-center p-4 rounded-2xl hover:scale-[1.02] duration-1000 shadow-lg"
                                    >
                                        <div className="w-3/4 rounded-xl overflow-hidden" >
                                            <img
                                                src={item.recipe.image}
                                                alt={item.recipe.label}
                                                style={{
                                                    width: '100%'
                                                }}
                                            />
                                        </div>
                                        <h1 className="text-[#8D7B68] text-lg font-semibold text-center">{item.recipe.label}</h1>
                                        <p className='text-[#8D7B68]'>{Math.floor(item.recipe.calories)} calories</p>
                                        <Button
                                            handleClick={() => handleClickDetail(item._links.self.href)}
                                            label="Detail Recipe" />
                                    </div>
                                )
                            })
                            :
                            <div className="w-full col-span-3">
                                <img src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600' alt="" />
                            </div>
                    }
                </div>
            </div>

        </div>
    )
}
