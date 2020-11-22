import React,{useState} from 'react'


const App = () =>
{
    const [name,setName]=useState("");
    const[fullName, setfullName]=useState("");
    const inputEvent = (event) =>{
        console.log(event.target.value);
      setName(event.target.value);

    };

    const onSubmit = () =>
    {
        setfullName(name);
    }

    return( 
        <>
        <div>
            <h1>Hello {fullName} </h1>
            <input type="text" placeholder="enter your name" onChange={inputEvent} value={name} />
            <button onClick={onSubmit}>Click me 😄 </button>
        </div>
        </>
    );
};

export default App;