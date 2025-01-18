import Header from './components/header'
import Home from './pages/Home'
import Footer from './components/footer'
import Whatsapp from './components/whatsapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sermons from './pages/Sermons'
import Ministries from './pages/Ministries'
import About from './pages/About'

function App() {

    return (
        <>
            <BrowserRouter>

                <Header />    
                <div className='h-32 md:h-28 w-full'></div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
                <Routes>
                    <Route path="/sermons" element={<Sermons />}></Route>
                </Routes>
                <Routes>
                    <Route path="/ministries" element={<Ministries />}></Route>
                </Routes>
                <Routes>
                    <Route path="/about" element={<About />}></Route>
                </Routes>

                <Footer />

            </BrowserRouter>


            <Whatsapp />
        </>
    )
}

export default App
