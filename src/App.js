import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { getMonth } from './util';
// import CalendarHeader from './components/CalendarHeader';
// import Sidebar from './components/Sidebar';
// import Month from './components/Month';
// import GlobalContext from './context/GlobalContext';
// import EventModel from './components/EventModel';
import Signup from './components/LoginPage/Signup';
import Signin from './components/LoginPage/Signin';
import Account from './components/LoginPage/Account';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  // const [currentMonth, setCurrentMonth] = useState(getMonth());
  // const { monthIndex, showEventModel } = useContext(GlobalContext);

  // useEffect(() => {
  //   setCurrentMonth(getMonth(monthIndex));
  // }, [monthIndex])

  return (
    // <React.Fragment>
    // {showEventModel && <EventModel />}
    //   <div className="h-screen flex flex-col">
    //     <CalendarHeader />
    //     <div className="flex flex-1">
    //       <Sidebar />
    //       <Month month={currentMonth}/>
    //     </div>
    //   </div>
    // </React.Fragment>
    <AuthContextProvider>
      <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/account' element={<Account />} />
      </Routes>
    </AuthContextProvider>
    
    
  );
}

export default App;
