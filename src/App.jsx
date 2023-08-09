import './App.css'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import Cities from './pages/Cities'

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
