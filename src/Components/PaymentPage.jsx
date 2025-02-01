import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const { id } = useParams(); // Get order ID from URL
  console.log("Order ID:", id);

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
        key: "rzp_live_joWXtNdtH1irLE,lmcf2mTf5zF0ScmVbnGdZp3h",
        currency: "INR",
        name: "Sai Kiran",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: id,
        handler: function (response) {
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          console.log("Signature:", response.razorpay_signature);
        },
        prefill: {
          name: "Sai Kiran",
          email: "saikiran@gmail.com",
          contact: "8688487669",
        },
        notes: {
          address: "Sai Kiran, Bangalore",
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
