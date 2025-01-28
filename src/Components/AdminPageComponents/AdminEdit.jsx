import { Box, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleUser } from "../../Redux/clientSlices/clientUsers";
import { adminEditCampaign } from "../../Redux/adminSlice/adminSlice";

const AdminEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    campaignname: "",
    targetamount: "",
    days: "",
    imgurl: "",
  });

  const dispatch = useDispatch();
  const { isLoading, isError, getSingleUser } = useSelector(
    (state) => state.clientUsers
  );

  useEffect(()=>{
     dispatch(fetchSingleUser(id));
  },[dispatch,id])

  useEffect(()=>{
    if(getSingleUser?.campaignDetails){
        setFormData({
            campaignname:getSingleUser?.campaignDetails?.campaignName,
            targetamount:getSingleUser?.campaignDetails?.targetAmount,
            days:getSingleUser?.campaignDetails?.days,
            imgurl:getSingleUser?.campaignDetails?.imgurl
         })
    }
  },[getSingleUser])



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminEditCampaign({id,formData}));
    // navigate('/admin/campaignlist')
  };

  return (
    <Box w={"80%"} ml={"20%"} p={"1rem"} h={"100vh"}>
      <Box fontSize={"1.5rem"} fontWeight={"bold"}>
        Edit Campaign
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
          <FormLabel>Days:</FormLabel>
          <Input
            border={"2px solid rgb(0,0,0,0.5)"}
            type="number"
            placeholder="Enter Days"
            name="days"
            value={formData?.days}
            onChange={handleChange}
          />
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Input
            border={"2px solid rgb(0,0,0,0.5)"}
            type="text"
            placeholder="Enter Image Url"
            value={formData?.imgurl}
            name="imgurl"
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

export default AdminEdit;
