import css from './Options.module.css'

export default function Options({update, total, reset}) {
    return (
        <div>
            <button className={css.btn} onClick={() => update("good")}>Good</button>
            <button className={css.btn} onClick={() => update("neutral")}>Neutral</button>
            <button className={css.btn} onClick={() => update("bad")}>Bad</button>
            {total === 0 || <button className={css.btn} onClick={reset}>Reset</button>}
    </div>
)
}

