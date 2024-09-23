import { useEffect, useState } from "react";
import Form from "../components/Form/Form";
import "./app.css";
import List from "../components/List/List";
import axios from "axios";
import toast from "react-hot-toast";

const App = () => {

  const [list, setList] = useState(false);
  const [data, setData] = useState([])

  const handleFetchData = async () => {
    try {
      setList(true)
      const res = await axios.get("http://localhost:4000/api/user/fetch-data");
      const data = await res.data;

      if (data?.success) {
        setData(data?.data)
        toast.success(data?.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.message)
    }
  };


  return (
    <div className="app_container">
      {
        list ?
          <>
            <h2>List Address</h2>
            <List data={data} />
          </> : <>
            <h2>ADDRESS FORM</h2>
            <Form setList={setList} handleFetchData={handleFetchData} />
          </>

      }

    </div>
  )
}

export default App