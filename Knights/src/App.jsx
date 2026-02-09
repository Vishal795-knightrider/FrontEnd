import './App.css'
import Header from'./components/Header.jsx'     //header isliye likha kyuki kuch return ho ayega header.jsx se
import Registeration from './components/Registeration.jsx'
import Footer from './components/footer.jsx'
import Main from './components/main.jsx'

export default function App() {                //This fn is a type of javascript

  const y=[2024,2025,2026];
  const c={name:"KIET",location:"Ghaziabad",estdyear:1998};
  return (
    <div>
        <Header title="I am a Knight Rider" color="Red" year="2026"/>
        <Header title="Who rides in the Night"/>

        <card>                                                        
          <h4>This is Childrren Demo</h4>
          <p>This Demo talks about passing Children</p>              
          <p>Thanks for reading</p>
        </card>     

        <Registeration />   
        <Footer year={y} company={c}/>
        <Main /> 

    </div>
  )
}

