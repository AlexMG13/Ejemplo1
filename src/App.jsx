import './App.css'
import Home from './pages/Home'
import Layout from './layouts/Layout'


function App() {
  return (
    <>
      <div className='w-full min-h-screen'>
        <Layout>
          <Home />
        </Layout>
      </div>
    </>
  )
}

export default App
