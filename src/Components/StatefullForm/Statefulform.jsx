import { useState } from "react";

const Statefulform = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be 6 characters or longer");
    } else {
      setError("");

      console.log(name, email, password);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" />
        <br></br>
        <input onChange={handleEmailChange} type="text" name="email" required />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value="submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Statefulform;
