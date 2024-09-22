import { useState } from "react";
import Form from "../components/Form/Form";
import "./app.css";
import List from "../components/List/List";

const App = () => {

  const [list, setList] = useState(false);

  return (
    <div className="app_container">
      {
        list ?
          <>
            <h2>List Address</h2>
            <List />
          </> : <>
            <h2>ADDRESS FORM</h2>
            <Form setList={setList}/>
          </>

      }

    </div>
  )
}

export default App