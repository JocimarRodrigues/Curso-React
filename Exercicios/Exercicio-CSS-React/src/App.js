import logo from './logo.svg';
import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const users = [
    {id: 1, name: "John", age: 26, job: "Programador" },
    {id: 2, name: "Caroline", age: 24, job: "Maquiadora" },
    {id: 1, name: "Simone", age: 13, job: "Estudante" },
  ]
  return (
    <div className="App">
    {users.map((user) => (
      <UserDetails
      name={user.name}
      age={user.age}
      job={user.job} />
      
    ))}
     
    </div>
  );
}

export default App;
