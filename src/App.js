import { Route, Switch } from "react-router-dom";
import './index.css';
import Play from "./pages/Play";
import HomePage from "./pages/HomePage";
import Favourite from "./pages/Favourites";
import Search from "./pages/Search";
import Navigation from "./components/Navigation";
function App() {
  return (

<div>
  <Navigation/>
<Switch>


<Route path='/' exact>
<HomePage/>
</Route>

<Route path='/new-Search'>
<Search/>
</Route>

<Route path='/favorites'>
<Favourite/>
</Route>
<Route path='/play'>
<Play/>
</Route>

</Switch>
</div>
  );
}

export default App;
