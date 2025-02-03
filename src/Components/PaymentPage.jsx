import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { postPaymentSuccess } from "../Redux/clientSlices/clientUsers";
import { Box, Spinner, Text, useToast } from "@chakra-ui/react";


const PaymentPage = () => {

  const prevId = useRef(null);
  const { id } = useParams(); // Get order ID from URL
  const location = useLocation(); // Access the state passed via navigation
  const paymentData = location.state || {};
  console.log("Order ID, paymentData", id, paymentData);
  const [orderConfirmId, setOrderConfirmId] = useState(null)
  const dispatch = useDispatch();
  const Toast = useToast();
   const navigate = useNavigate();

  useEffect(() => {
    if (!id) return; // Ensure ID exists before proceeding
    if (prevId.current !== null && prevId.current === id) {
      return
    }
    prevId.current = id; // Update previous value after state change
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
        name: "ISKCON Hubli-Dharwad",
        description: "Mandir Nirmana Seva",
        order_id: id,
        handler: function (response) {
          setOrderConfirmId(response.razorpay_payment_id)
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          console.log("Signature:", response.razorpay_signature);
          console.log("Payment successful:", response);
           
           
            navigate(-1);
          Toast({
            title: "Payment Successful",
            description: "Your payment was successful. Thank you!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
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

  dispatch(postPaymentSuccess({ paymentId: orderConfirmId, orderid: id }));


  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.100"
      p={4}
    >
      <Spinner size="xl" color="blue.500" />
      <Text mt={4} fontSize="xl" fontWeight="bold">
        Processing your payment, please wait...
      </Text>
    </Box>
  );
};

export default PaymentPage;
