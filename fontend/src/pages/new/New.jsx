import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const New = ({ }) => {
  const [file, setFile] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Add user data:", selectedUser);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="imageContainer">
              <img
                className="userImage"
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="username">Role:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="email">Department:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="username">Name:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="username">Email:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="username">Password:</label>
                <input
                  type="password"
                  id="username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="username">DOB:</label>
                <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        // You can customize the date format according to your needs
      />
              </div>
                <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
