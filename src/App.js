import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Spinner from './UI/Spinner/Spinner';
import Homescreen from './screens/Homescreen';
import Projectscreen from './screens/Projectscreen';
import Skillscreen from './screens/Skillscreen';
import Aboutscreen from './screens/Aboutscreen';
function App() {
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  let showing = (
      <div>
        <Switch>
          <Route path='/projects' component={Projectscreen} />
          <Route path='/skills' component={Skillscreen} />
          <Route path='/about' component={Aboutscreen} />
          <Route path='/' exact component={Homescreen} />
        </Switch>
      </div>
  );
  return(
    <BrowserRouter>
    <div>
      <div>
        {loading?null:<Navbar />}
      </div>
      <div>
        {loading?<Spinner />:showing}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
