import { UserCard } from './UserCard';
import { Wrapper } from './Wrapper';
import './App.css'

export default function App() 
{  const users=[
  {name:"Virat Kohli",
    role:"BatsMan",
    country:"India"
  },

  {
    name:"Ms. Dhoni",
    role:"WK-Batsman",
    country:"India"
  }
];

  return (
    <>

    <h1>User DashBoard</h1>
    <Wrapper title="User list">     
    {
    users.map((data)=>(<UserCard data={data}/>))
    }
    </Wrapper>
  
    </>
  )
}