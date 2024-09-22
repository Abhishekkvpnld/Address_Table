import { useState } from "react";
import axios from "axios";
import "./form.css";
import toast from "react-hot-toast";

const Form = ({ setList }) => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:4000/api/user/add-address", { name, address });
            const data = await res.data;

            if (data?.success) {
                toast.success(data?.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error.message)
        }
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
                <button type="submit">SUBMIT</button>
            </div>

            <div onClick={() => setList(true)} className="list_btn">
                <button className="view_list">VIEW LIST</button>
            </div>

        </form>
    )
}

export default Form;