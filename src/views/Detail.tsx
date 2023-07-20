import { useParams } from 'react-router-dom'
import { getDatail } from '../services/services';
import { useEffect, useState } from 'react';
import { IHits } from '../interfaces/recipe';
import { LoadingLayer } from './components/LoadingLayer';

export const Detail = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [detail, setDetail] = useState<IHits | undefined>()

    const fetch = async () => {
        setIsLoading(true)
        try {
            const response = await getDatail(id || '')
            const data: IHits = response?.data as IHits

            setDetail(data)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
        setIsLoading(false)

    }

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='w-full flex justify-center'>

            {
                isLoading && (<LoadingLayer />)
            }
            <div className='w-10/12 flex max-md:flex-col max-md:items-center items-start bg-[#F1DEC9] rounded-b-xl shadow-2xl'>
                <div className='w-3/4 rounded-br-xl shadow-xl bg-black overflow-hidden'>
                    <img src={detail?.recipe.images.REGULAR.url} alt="" style={{ width: '100%' }} />
                </div>
                <div className='p-4'>
                    <h1 className='col-span-7 text-xl font-semibold'>{detail?.recipe.label}</h1>
                    {
                        detail?.recipe.totalWeight && (
                            <p>Total Weight  : {Math.floor(detail?.recipe.totalWeight)}</p>
                        )
                    }
                    <p>Calories : {detail?.recipe.calories ? Math.floor(detail.recipe.calories) : '-'}</p>
                    <div className='w-full p-4'>
                        <h1 className='py-2 text-xl'>{detail?.recipe.ingredientLines.length} Ingrediens :</h1>
                        <ul className='list-disc'>
                            {
                                detail?.recipe.ingredientLines && detail.recipe.ingredientLines.length > 0 &&
                                detail.recipe.ingredientLines.map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
