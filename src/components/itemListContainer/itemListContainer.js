import './itemListContainer.css'
import {ItemCount} from '../itemCount/itemCount'

export const ItemListContainer = ({greeting}) => {
    return(
        <section>
            <h1>Este es un {greeting}</h1>
            <div className="itemFlex">
                <div className="item">
                    <h2>Item con stock</h2>
                    <ItemCount initial="0" stock="7" />
                </div>
                <div className="item">
                    <h2>Item sin stock</h2>
                    <ItemCount initial="0" stock="0" />
                </div>
            </div>
        </section> 
    )
}