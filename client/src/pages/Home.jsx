import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, getCurrentCount } from '../features/counter/counterSlice';

function Home() {
    const count = useSelector(getCurrentCount);
    const dispatch = useDispatch();
    return (
        <>
            <h1 className="text-3xl font-bold">Vite + React</h1>
            <div className="flex-col space-y-3" >
                <div>Count is {count}</div>
                <div className="flex-row space-x-3">
                    <button 
                    className="px-3 py-2 bg-cyan-800 text-white rounded-md" 
                    onClick={() => dispatch(increment())}
                    >
                    +
                    </button>
                    <button 
                    className="px-3 py-2 bg-cyan-800 text-white rounded-md disabled:bg-gray-600"
                    disabled={count <= 0}
                    onClick={()=>dispatch(decrement())}
                    >
                    -
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home