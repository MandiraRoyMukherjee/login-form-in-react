import React,{useState} from 'react'


const App2 = () =>
{
   const [fullName,setFullName] =useState ({
       fname: "",
       lname:"",
       email:"",
       phone: "",
   });


    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);
        const { name,value} =event.target;

        setFullName((preValue) =>
        {
            console.log(preValue);
            return{
                ...preValue,
               [name]:value,
            };
        
        });
    };

     


    const onSubmit = (event) =>
    {
        event.preventDefault();
       alert("from submitted")
    };
      

   
    return( 
        <>
        <div className="main_div">
        <form onSubmit={onSubmit}>
        <div>
            <h1>Hello {fullName.fname} {fullName.lname} </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input type="text" placeholder="enter your name" name="fname" onChange={inputEvent} value={fullName.fname} />
            <br />
            <input type="text" placeholder="enter your lastname" name="lname" onChange={inputEvent} value={fullName.lname} />
            <br />
            <input type="email" placeholder="enter your email" name="email" onChange={inputEvent} value={fullName.email} />
            <br />
            <input type="number" placeholder="enter your number" name="phone" onChange={inputEvent} value={fullName.phone} />

          <button type="submit" > submit me 😄 </button>
        </div>
        </form>
        </div>
        < />
    );
};

export default App2;