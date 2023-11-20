import logo from './logo.svg';
import './App.css';
import TicketCard from './components/ticket-card/TicketCard';
import AbscondingSetup from './screen/hrtech/dashboard/absconding';
import EmergencyScreen from './screen/hrtech/dashboard/emergencyScreen';



function App() {
  return (
    <div className="App" style={{margin: "50px"}}>
    <EmergencyScreen/>
    </div>
  );
}

export default App;
