import {Navbar, Welcome, Footer, Service, Transaction} from './components'

const App=()=> {
 

  return (
    <div className="min-h-screen ">
         <div className="gradient-bg-welcome">
         <Navbar/>
         <Welcome/>
         
    </div>
    <Service/>
    <Transaction/>
    <Footer/>
    </div>
  )
}

export default App
