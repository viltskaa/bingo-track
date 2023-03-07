import { useContext, useEffect, useState} from "react";
import Cells from "./Components/Cells.jsx";
import Cell from "./Models/Cell.js";
import {firebaseContext} from "./main.jsx";
import Loader from "./Components/Loader/Loader.jsx";
import EmailInput from "./Components/EmailInput/EmailInput.jsx";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase.js";

function App() {
  const API = useContext(firebaseContext);
  const [cells, setCells] = useState([]);
  const [user, loading, ] = useAuthState(auth);

  const getCells = async () => {
    const cells = await API.getCells();
    cells.splice(12, 0, { task : '' });
    setCells(cells.map((item, index) => Cell.Builder(item, index)))
  }

  useEffect(() => {
    getCells()
  }, [])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      <Cells cells={cells}/>
      {!user && <EmailInput/>}
    </>
  )
}

export default App
