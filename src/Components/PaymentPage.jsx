import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const PaymentPage = () => {
  const { id } = useParams(); // Get order ID from URL
  const location = useLocation(); // Access the state passed via navigation
  const paymentData = location.state || {};
  console.log("Order ID, paymentData", id, paymentData);

  useEffect(() => {
    if (!id) return; // Ensure ID exists before proceeding

    // Function to load Razorpay script dynamically
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js"; // Razorpay script
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const openRazorpay = async () => {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        console.error("Failed to load Razorpay script.");
        return;
      }

      const options = {
        key: process.env.REACT_APP_RZP_KEY,
        currency: "INR",
        name: "Iskcon Hubli-Dharwad",
        description: "Mandir Nirmana Seva",
        order_id: id,
        handler: function (response) {
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          console.log("Signature:", response.razorpay_signature);
        },
        prefill: {
          name: paymentData.name,
          email: paymentData.email,
          contact: paymentData.phone,
        },

        notes: {
          name: paymentData.name,
          phone: paymentData.phone,
          email: paymentData.email,
          seva: "Mandir Nirmana Seva",
          address: paymentData.address,
          pan_number: paymentData.pan_number,
          send_confirmation_message_to_preacher: paymentData.send_confirmation_message_to_preacher
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

      rzp1.on("payment.failed", function (response) {
        console.error("Payment failed:", response);
      });
    };

    openRazorpay();
  }, [id]);

  return <div>Processing Payment...</div>;
};

export default PaymentPage;
