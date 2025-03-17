import './App.css'
import Footer from './components/Footer/Footer';
import Herosection from './components/HeroSection/Herosection'
import Category from './components/Sections/category/Category'
import NewArrivals from './components/Sections/NewArrivals';
import content from './data/content.json'

function App() {
  
  return (
    <>
      <div className='App'>
        <Herosection/>
        <NewArrivals/>
        {content?.pages?.shop?.sections && content?.pages?.shop?.sections?.map((item, index) => <Category key={item?.title+index} {...item} />)}
        <Footer content={content?.footer}/>
      </div>  
    </>
  )
}

export default App
