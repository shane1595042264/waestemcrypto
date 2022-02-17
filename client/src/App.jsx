import {Navbar, Welcome, Footer, Service, Transaction} from './components'

import "./index.css"
const App=()=> {
 

  return (
    <div className="min-h-screen w-full items-center flex">
         <div className="flex w-full items-center">
         Why is it not loading index.css either???
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
