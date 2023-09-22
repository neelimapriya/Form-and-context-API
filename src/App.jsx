import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
import ReuseableForm from "./Components/ReusableForm.jsx/ReuseableForm";
// import HookForm from "./Components/HookForm/HookForm";
// import Refform from "./Components/RefForm/Refform";
// import SimpleForm from "./Components/SimpleForm/SimpleForm";
// import Statefulform from "./Components/StatefullForm/Statefulform";

function App() {
  const handleSignUpSubmit =data =>{
    console.log('sign up data',data )
}

const handleUpdateProfile=data=>{
  console.log('update profile', data)
}
  return (
    <>
      <h1>Vite + React</h1>
    <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <Statefulform></Statefulform> */}
      {/* <Refform></Refform> */}
      {/* <HookForm></HookForm> */}
      
      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReuseableForm> */}
    </>
  );
}

export default App;
