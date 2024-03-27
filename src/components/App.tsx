import Users from './Users';
import Counter from './Counter';
import DownshiftOne from './DownshiftOne'
import DownshiftTwo from './DownshiftTwo';
import DownshiftThree from './DownshiftThree';
import DownshiftFour from './DownshiftFour';
import '../styles/App.css'
import IngredientSelector from './IngredientSelector';

function App() {
  return (
    <main>
      <div className="container">
        <IngredientSelector />
      </div>
    </main>
  );
}

export default App;
