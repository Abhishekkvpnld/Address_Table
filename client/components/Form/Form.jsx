import { useState } from "react";
import axios from "axios";
import "./form.css";

const Form = () => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async () => {
        // try {
        //     const res = await axios.post("http://localhost:5173/address", { name, address });
        //     const data = await res.data;
        // } catch (error) {
        //     console.log(error.message)
        // }
    }


    return (
        <form onSubmit={handleSubmit} className="form" >
            <div className="name_div">
                <label htmlFor="name">Name</label>
                <input placeholder="Enter Name..." type="text" onChange={(e) => setName(e.target.value)} name="name" value={name} id="name" />
            </div>

            <div className="address_div">
                <label htmlFor="address">Address</label>
                <textarea placeholder="Enter Address..." name="address" id="address" onChange={(e) => setAddress(e.target.value)} value={address}></textarea>
            </div>

            <div className="submit_btn">
                <button>SUBMIT</button>
            </div>

        </form>
    )
}

export default Form;