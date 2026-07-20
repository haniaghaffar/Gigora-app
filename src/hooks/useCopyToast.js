import { useState } from "react";
import Toast from "../components/Toast";

export default function useCopyToast() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const copy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage("Copied successfully!");
      setToastType("success");
    }).catch(() => {
      setToastMessage("Failed to copy.");
      setToastType("error");
    });
  };

  const ToastComponent = (
    <Toast
      message={toastMessage}
      type={toastType}
      onClose={() => setToastMessage("")}
    />
  );

  return { copy, toastMessage, toastType, setToastMessage, ToastComponent };
}
