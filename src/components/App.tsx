import Users from './Users';
import Counter from './Counter';
import DownshiftOne from './DownshiftOne'
import DownshiftTwo from './DownshiftTwo';
import DownshiftThree from './DownshiftThree';
import DownshiftFour from './DownshiftFour';
import '../styles/App.css'

function App() {
  return (
    <main>
      <div className="container">
        <DownshiftOne />
        <DownshiftTwo />
        <DownshiftThree />
        <DownshiftFour />
        <Users />
        <Counter />
      </div>
    </main>
  );
}

export default App;
