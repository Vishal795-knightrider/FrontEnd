let promise=new Promise((resolve,reject)=>{
    let success=true;


if(success){
    resolve("Data Connected");
}

else{
    rejct("error in Connection");
}
})

//consuming promise

fetch("https://jsonplaceholder.typicode.com/users")    //isse hm do end point ke bich connection establish karenge ,to uske beech kuch time lageag usse hame solve krna hai to agar connection fail hua to error agar pass hua to then //isme url ayega jis website me hm jayenge  (yeh promise return karega)
.then(response=>response.json())
.then(data=>data.map((user)=>console.log(user.name,user.id)))
.catch(error=>console.log(error))
