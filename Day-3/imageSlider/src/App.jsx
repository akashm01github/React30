import React from 'react'
import ImageSlider from './components/ImageSlider'

const App = () => {
  return (
    <div>
     <ImageSlider url={`https://picsum.photos/v2/list`} page={`1`} limit={`10`}/>
    </div>
  )
}

export default App