import React,{useState} from 'react'


const App1 = () =>
{
    const [name,setName]=useState("");
    const[fullName, setfullName]=useState("");
    const[lastName, setLastName]=useState("");
    const[lastNameNew, setLastNameNew]=useState("");


    const inputEvent = (event) =>{
        console.log(event.target.value);
      setName(event.target.value);
     

    };

    const onSubmit = (event) =>
    {
        event.preventDefault();
        setfullName(name);
        setLastNameNew(lastName);
    };
    const inputEventTwo= (event) =>
    { console.log(event.target.value);
        setLastName(event.target.value);
    };

    return( 
        <>
        <div className="main_div">
        <form onSubmit={onSubmit}>
        <div>
            <h1>Hello {fullName} {lastNameNew} </h1>
            <input type="text" placeholder="enter your name" onChange={inputEvent} value={name} />
            <br />
            <input type="text" placeholder="enter your lastname" onChange={inputEventTwo} value={lastName} />
          <button type="submit" > submit me 😄 </button>
        </div>
        </form>
        </div>
        < />
    );
};

export default App1;