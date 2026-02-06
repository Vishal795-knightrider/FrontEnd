import './App.css'
import Header from'./components/Header.jsx'     //header isliye likha kyuki kuch return ho ayega header.jsx se
import Registeration from './components/Registeration.jsx'
import Footer from './components/footer.jsx'

export default function App() {                //This fn is a type of javascript

  const y=[2024,2025,2026];
  const c={name:"KIET",location:"Ghaziabad",estdyear:1998};
  return (
    <div>
        <Header title="I am a Knight Rider"/>
        <Header title="Who rides in the Knight"/>     
        <Registeration />   
        <Footer year={y} company={c}/> 

    </div>
  )
}

