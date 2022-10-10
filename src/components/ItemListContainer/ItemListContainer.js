import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { FiltroContainer } from '../FiltroContainer/FiltroContainer'

export function ItemListContainer() {

    return (
        <>
            <div className='article2'>
                <ItemList />
                <FiltroContainer />
            </div>
        </>
    )
}