import React from "react";
import ReactDOM from "react-dom";
import styles from "./notification.module.css";

export default function Notification(props) {
  const { title, message, status } = props;

  let statusStyles = "";
  if (status === "success") {
    statusStyles = styles.success;
  }

  if (status === "pending") {
    statusStyles = styles.pending;
  }

  if (status === "error") {
    statusStyles = styles.error;
  }

  const cssStyles = `${styles.notification} ${statusStyles}`;
  return ReactDOM.createPortal(
    <div className={cssStyles}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}
