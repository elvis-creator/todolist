import React, { useState } from "react";
import "./todolistform.css";

function Todolistform() {

  
  return (
    <div className="form-container">
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required />
        <label htmlFor="completed">Completed</label>
        <input type="checkbox" id="completed" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Todolistform;
