import { useState } from "react";
import Swal from "sweetalert2";
import api from "../../api";

export function useUpdateData() {
  const [loading, setLoading] = useState(false);

  const updateData = async (
    info,
    id,
    formData,
    successMessage,
    toggleModal
  ) => {
    const url = `/api/${info}/update/${id}/`;
    // Show confirmation dialog before proceeding
    const result = await Swal.fire({
      title: `Are you sure you want to edit this data?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#196e3a",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, edit it`,
    });

    // If user confirms, proceed with the action
    if (result.isConfirmed) {
      setLoading(true);
      try {
        const res = await api.put(url, formData);
        Swal.fire({
          title: successMessage,
          text: "The operation was successful.",
          icon: "success",
        });
        toggleModal();
        return res; // Optionally return the response
      } catch (error) {
        if (error.response) {
          const errors = error.response.data.errors || error.response.data; // Handle cases where `errors` might not be present
      
          // Ensure errors is an object and format accordingly
          if (errors && typeof errors === 'object') {
            const formattedErrors = Object.entries(errors)
              .map(([field, messages]) => {
                // Ensure messages is an array, or treat it as a single string if it's not
                if (Array.isArray(messages)) {
                  return `${field}: ${messages.join(", ")}`; // Join array messages
                } else {
                  return `${field}: ${messages}`; // Handle non-array messages (string, etc.)
                }
              })
              .join("\n");  // Join all errors with new lines
      
            Swal.fire({
              title: "Validation Error!",
              text: formattedErrors || "There was an issue updating the data.",
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "The error response structure is unexpected.",
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
        setLoading(false);  // Hide loading indicator
      }       
    } else {
      // If user cancels, keep the modal open
      console.log("Action cancelled, modal will remain open.");
    }
  };

  return { updateData, loading };
}
