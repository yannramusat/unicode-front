import logo from '../assets/logo.svg';
import '../styles/App.css';
import Users from './Users';

function App() {
  return (<main>
      <h1>Users</h1>
      <div className="container">
        <Users />
      </div>
    </main>);
}

export default App;
