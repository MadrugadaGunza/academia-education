import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const findAllUsers = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch("http://localhost:5000/user");
        console.log(response);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    findAllUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h4>Erro: {error}</h4>;

  return (
    <>
      <Navbar />
      <div className="container">
        {data &&
          data.map((user) => (
            <div key={user._id} className="card">
              <h5>Nome: {user.name}</h5>
              <h5>Email: {user.email}</h5>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
