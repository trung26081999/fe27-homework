import { useState } from "react";
import "./MainContent.scss";

export function MainContent({ handleAddTask }) {
  const [title, setTitle] = useState("");
  const [remindDate, setRemindDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault(e);

    handleAddTask(title, remindDate);
    setTitle("");
    setRemindDate("");
    if (!Validate()) {
      e.preventDefault();
    }
  }
  const Validate = () => {
    const title = document.getElementById("title").value;
    console.log(title);
    const date = document.getElementById("date").value;
    console.log(date);
    let valid = true;
    if (title === "") {
      alert("Bạn chưa nhập nội dung");
      valid = false;
    }
    if (date === "") {
      alert("Bạn chưa nhập ngày nhắc");
      valid = false;
    }

    return valid;
  };

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-content">
          <label className="form-label">Nội dung</label>
          <input
            className="form-input"
            placeholder="Nhập nội dung của ngày"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            id="title"
          />
        </div>
        <div className="form-content">
          <label className="form-label">Ngày nhắc:</label>
          <input
            className="form-date"
            type="date"
            onChange={(e) => {
              setRemindDate(e.target.value);
            }}
            value={remindDate}
            id="date"
          />
          <button className="saveDate">Lưu lại</button>
        </div>
      </form>
    </div>
  );
}
