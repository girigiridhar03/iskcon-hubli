import { Box, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adminCreateCampaign } from "../../Redux/adminSlice/adminSlice";

const AdminCreateCampaign = () => {
  const [formData, setFormData] = useState({
    campaignname: "",
    targetamount: "",
    enddate:"",
    phoneno:"",
    imgfile: ""
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.campaignname.trim() ||
      !formData.targetamount ||
      !formData.enddate ||
      !formData.imgfile || 
      !formData.phoneno
    ) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(adminCreateCampaign(formData));

    return setFormData({
      campaignname: "",
      targetamount: "",
      enddate:"",
      phoneno:"",
      imgfile: "",
    });
  };



  return (
    <Box w={"75%"} ml={"25%"} p={"1rem"} h={"100vh"}>
      <Box fontSize={"1.5rem"} fontWeight={"bold"}>
        Create Campaign
      </Box>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        <VStack alignItems={"flex-start"}>
          <FormLabel>Campaign Name:</FormLabel>
          <Input
            border={"2px solid rgb(0,0,0,0.5)"}
            type="text"
            placeholder="Enter Campaign Name"
            name="campaignname"
            value={formData?.campaignname}
            onChange={handleChange}
          />
        </VStack>
        <VStack alignItems={"flex-start"}>
          <FormLabel>Target Amount:</FormLabel>
          <Input
            border={"2px solid rgb(0,0,0,0.5)"}
            type="number"
            placeholder="Enter Target Amount"
            name="targetamount"
            value={formData?.targetamount}
            onChange={handleChange}
          />
        </VStack>
        <VStack alignItems={"flex-start"}>
          <FormLabel>Campaign End Date:</FormLabel>
          <Input
            border={"2px solid rgb(0,0,0,0.5)"}
            type="date"
            placeholder="Enter Date"
            name="enddate"
            value={formData?.enddate}
            onChange={handleChange}
          />
        </VStack>
        <VStack alignItems={"flex-start"}>
          <FormLabel>Campaign Mobile No.:</FormLabel>
          <Input
            border={"2px solid rgb(0,0,0,0.5)"}
            type="tel"
            placeholder="Enter mobile number"
            name="phoneno"
            value={formData?.phoneno}
            onChange={handleChange}
          />
        </VStack>
        <VStack alignItems={"flex-start"}>
        <FormLabel>Campaign Image:</FormLabel>
          <Input
            type="text"
            placeholder="Enter Image Url"
            value={formData?.imgfile}
            name="imgfile"
            onChange={handleChange}
          />
        </VStack>
        <Input
          type="submit"
          value={"Create Campaign"}
          mx={"auto"}
          w={"auto"}
          bgColor={"green.400"}
          fontWeight={"bold"}
          color={"white"}
          cursor={"pointer"}
        />
      </form>
    </Box>
  );
};

export default AdminCreateCampaign;
