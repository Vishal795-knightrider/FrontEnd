import {useState} from 'react';
export default function Search(){
 
    const [find,setFind]=useState("");   //find me vo receve hoga jo hm text box me enter karege
    const Student=["Vishal Kumar Jhatuu","Roham","Rinku","Magan","Anay"];
     
    const student = Student.filter((name) => name.toLowerCase().includes(find.toLowerCase()));
    return(
        <div>
            <h2>Demo to show search</h2>
            <input type="text" placeholder="Enter key to search"
            value={find}
            onChange={(e)=>setFind(e.target.value)}/>

            <ul>
                {student.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>

        </div>
    )
}