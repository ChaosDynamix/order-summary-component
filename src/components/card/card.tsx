import style from './card.module.scss'
import Order from '../order/order'
import Button from '../button/button'
import illustration from '../../assets/images/illustration-hero.svg'

function Card() {
    return (
        <article className={style.card}>
            <img className={style.card__image} src={illustration} />
            <div className={style.card__body}>
                <h1 className={style.card__title}>Order Summary</h1>
                <p className={style.card__description}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <div className={style.card__order}>
                    <Order />
                </div>
                <div className={style.card__primaryButton}>
                    <Button label="Proceed to Payment" secondary={false} />
                </div>
                <Button label="Cancel Order" secondary={true} />
            </div>
        </article>
    )
}

export default Card