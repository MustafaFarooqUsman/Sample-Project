import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from '../Components/Home';
import Checkout from '../Components/Checkout';


class AppRouter extends React.Component{
    render(){
        return(
        <Router>
           <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/checkout' element={<Checkout />} />
           </Routes>
        </Router>
        )
    }
}

export default AppRouter;