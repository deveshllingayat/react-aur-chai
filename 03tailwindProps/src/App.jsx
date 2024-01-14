
import Card from './Card'
import './App.css'

function App() {
 let newObj = {
  name:'devesh',
  surname:'lingayat',
 }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card userName='lavesh' btnTxt='click me' newObj = {newObj}/>
      <Card userName='devesh'  newObj = {newObj}/>
    </>
  )
}

export default App
