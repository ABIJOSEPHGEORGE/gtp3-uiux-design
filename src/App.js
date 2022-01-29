
import {Blog,Features,Footer,Header,Possibilities,WhatGPT3} from './containers/index'
import {CTA,Brand,Navbar} from './components/index'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className="gradient__bg">
               <Navbar/>
               <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibilities/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App
