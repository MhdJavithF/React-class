import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, update } from '../Reducers/counterReducer';


export const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(increment())
    }

    const handleDecrease = () => {
        dispatch(decrement())
    }

    const handleText = (e) => {
        const val = Number(e.target.value);
        dispatch(update(val))
    }

    return (
        <div>
            <h3>Counter </h3>
            <button onClick={handleDecrease}>-</button>
            {count}
            <input type='number' value={count} onChange={handleText} placeholder='Enter number' />
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}
