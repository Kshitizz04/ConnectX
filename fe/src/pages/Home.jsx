import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../app-state/features/userPreferenceSlice';

const Home = () => {
    const counter = useSelector(
        state=> state.userPreference.count
    )
    const dispatch = useDispatch();

  return (
    <>
        <div>{counter}</div>
        <button onClick={()=>{dispatch(increment())}}> click me</button>
    </>
  )
}

export default Home