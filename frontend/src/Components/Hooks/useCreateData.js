import { useState } from "react";
import Swal from "sweetalert2";
import api from "../../api";

export function useCreateData() {
  const [loading, setLoading] = useState(false);

  const createData = async (
    info,
    formData,
    successMessage,
    toggleModal
  ) => {
    const url = `/api/${info}/create/`;
    // Show confirmation dialog before proceeding
    const result = await Swal.fire({
      customClass: { container: "create-swal" },
      title: `Are you sure you want to create this data?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#196e3a",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, create it`,
    });

    // If user confirms, proceed with the action
    if (result.isConfirmed) {
      setLoading(true);
      try {
        const res = await api.post(url, formData);
        Swal.fire({
          title: successMessage,
          text: "The operation was successful.",
          icon: "success",
        });
        toggleModal();
        return res; 
      } catch (error) {
        if (error.response) {
          const errorMessages = error.response.data.errors; 
      
          // Check if errors exist and format them
          if (errorMessages && typeof errorMessages === 'object') {
            const formattedErrors = Object.entries(errorMessages)
              .map(([field, messages]) => {
                // Ensure messages is an array and join them if needed
                return `${field}: ${Array.isArray(messages) ? messages.join(", ") : messages}`;
              })
              .join("\n");
      
            // Show the error message in a SweetAlert popup
            Swal.fire({
              title: "Validation Error!",
              text: formattedErrors || "There was an issue creating the data.",
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "The server returned an unexpected response format.",
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Error!",
            text: "An unexpected error occurred. Please try again.",
            icon: "error",
          });
        }
      
      } finally {
        setLoading(false);
      }
    } else {
      // If user cancels, keep the modal open
      console.log("Action cancelled, modal will remain open.");
    }
  };

  return { createData, loading };
}
