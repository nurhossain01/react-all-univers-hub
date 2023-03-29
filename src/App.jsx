import './App.css'
import Header from './Component/Header'



function App() {
  return (
    <div>
      <div className='bg-pink-200'>
        <h1 className='text-2xl pl-12 py-8 text-blue-700 font-extrabold'>AI Univers Hub</h1>
      </div>
      <Header>
        <div className=''>
          <p className='bg-red-400 py-2 px-4 rounded '>Short by data</p>
        </div>
      </Header>
    </div>
  )
}

export default App
