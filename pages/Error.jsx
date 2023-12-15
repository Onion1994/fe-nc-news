import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate()
  const location = useLocation()
  const errorMessage = location.state && location.state.errorMessage

  useEffect(() => {
    if (!errorMessage) {
    navigate("/error")
    }
  }, [navigate, errorMessage])

    return <p className="error-message">{errorMessage || "404: Not Found"}</p>
}