import useInputState from "../../Hooks/UseinputState";

const HookForm = () => {
    // const [name,handleNameChange]=useInputState('Rojoni hook')
    const emailState =useInputState('rojoni@sojoni.com')

    const handleSubmit=e=>{
        console.log('form data', emailState.value)
     e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name='name' /> */}
                <br></br>
                <input  {...emailState} type="email" name='email' />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;