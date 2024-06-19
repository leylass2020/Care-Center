import { useState } from "react";
import "../styles/admin.css";
import { useNavigate } from "react-router-dom";

function AdminBtn(Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="admin-button">
        <button
          onClick={() => {
            navigate(Props.loc);
          }}
        >
          {Props.name}
        </button>
      </div>
    </>
  );
}

export default AdminBtn;
