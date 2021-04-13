
import './App.css';
import Profilec from './profile/ProfileComponent'
import image from "./img.jpg";

const user = {
  FullName: "Mejri Fatma Ezzahra",
  Bio: "  ",
  Profession: "electrical engineer",
  
};


function App() {
  const handleName = () => alert(user.FullName);
  return (
    <div className="App">

      <Profilec
      FullName={user.FullName}
      Bio={user.Bio}
      Profession={user.Profession}
      handleName={handleName}>
    <div>
    <img src={image} />
    </div>
     </Profilec>

   </div>
   );
}
export default App;
