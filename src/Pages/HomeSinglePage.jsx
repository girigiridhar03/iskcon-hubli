import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleUser, postPaymentFormData } from "../Redux/clientSlices/clientUsers";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  FormLabel,
  HStack,
  Image,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import ProgressBar from "../Components/HomePageComponents/ProgressBar";
import { BsPinFill } from "react-icons/bs";
import { HiMiniTag } from "react-icons/hi2";
import { FaCalendarDays } from "react-icons/fa6";
import DottedAnimation from "../Components/DottedAnimation";

const campaign = {
  image1:
    "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1345/Thankyou_Banner_ISKCON-Hubli-Dharwad.jpg",
  image2: "https://www.fueladream.com/public/uploads/0894810651297247.jpg",
  context:
    "ISKCON, or the Hare Krishna movement, was founded by A. C. Bhaktivedanta Swami Prabhupada. ISKCON's purpose is to educate people from all backgrounds, races, and ethnicities on the importance of spiritual life and on how to practice spiritual life, to transform the material self-centered identity into a spiritual identity of unconditional love, to enhance spiritual awareness, benefit the devotees, and contribute to the well-being of humanity.",
  background:
    "A new temple is being built at Hubli -Dharwad. Strategically located on a hillock alongside the Bengaluru to Pune national highway this is called the Sri Radha Krishna Temple and Cultural Complex, Hubli-Dharwad. This will also have a Sri Srinivasa Govinda temple and multiple other facilities and amenities.",
  background1:
    "This magnificent project aims to celebrate India's rich heritage and diverse culture. The temple complex will cover an area of around 5.5 acres and the combined built-up area of the main Sri Radha Krishna temple and Sri Srinivasa Govinda temple will be approximately 2,25,000 square feet.",
  background2:
    "Once constructed it will be the largest temple complex in North Karnataka. So large that in the first 10 years, it is estimated that it will have a footfall of 20 million visitors.",
  image3: "https://www.fueladream.com/public/uploads/1482739548692376.jpg",
  image3Matter:
    "Picture : Architect’s rendition of how this magnificent temple complex will look at night. In the foreground is the Sri Srinivasa temple and at the back of the hillock is perched the Sri Radha Krishna temple.",
  image4: "https://www.fueladream.com/public/uploads/2458177465093326.jpg",
  image4Para1:
    "The construction cost for the overall complex is estimated at INR 67.5 Crore. In the first phase of construction, a cost of INR 19.77 Crores has been budgeted. Approximately INR 10.4 Crore has already been raised and paid to suppliers as advance to get work started (Read the full story for all the details).",
  image4Heading:
    "There is a need to raise another INR 9.37 Crores to complete the 1st phase.",
  image4para2:
    "Through this crowdfunding campaign, I and other like-minded well-wishers are coming together to raise as much as possible to get to the INR 9.37 Crore requirement. Work has already started and the first phase is expected to be completed by AUGUST 2024.",
  image5: "https://www.fueladream.com/public/uploads/5587172034968203.jpg",
  image5Para:
    "There already exists a make-shift temple of Sri Krishna Balaram at this location. This is already a major spiritual destination in the twin cities.Once the new temple complex comes up it will attract many more visitors. This demonstrates the significant impact and popularity of the temple as a cultural and religious destination.",
  initiative:
    "This crowdfunding campaign of mine is to help raise funds to complete the construction of Phase 1 of the temple. What we do today will have an impact on crores of visitors and devotees for decades to come. Funding has 80G tax benefits and large funders will be recognized on the wall of gratitude ( see details below in the story).",
  initiative1:
    "The primary objective of the temple complex is to provide education and guidance on spiritual life to people of all backgrounds, races, and ethnicities. It aims to promote understanding and practice of spiritual principles, fostering a deeper connection to inner values and a more meaningful way of living.",
  initiativeBold:
    "The Sri Radha Krishna Temple and Cultural Complex, Hubli-Dharwad is not envisaged just as a building - it aims to tell a story that combines history, art, and the feeling of being connected to something greater. ",
  image6: "https://www.fueladream.com/public/uploads/7326500197438156.jpg",
  image6para1:
    "ACTUAL SITE PICTURE: Aerial View of the ISKCON Sri Radha Krishna Temple & Cultural Complex which is coming up at Hubli-Dharwad in Karnataka. This is strategically located on the Pune - Bengaluru highway (NH-4 ). You can see the work-in-progress at the site. The building at the bottom right of the image is the existing makeshift temple.",
  templeComplex: "WHAT IS UNIQUE ABOUT THIS TEMPLE COMPLEX?",
  templeComplexMatter:
    "The Sri Radha Krishna Temple and Cultural Complex, Hubli-Dharwad will feature traditional rituals, and festivals, and provide spiritual and value education through various events. Additionally, it will serve as a platform for students to learn, will serve food to thousands of people, will have a multimedia theatre for cultural performances, a heritage auditorium, a library, a marriage hall, a ghosala, guest houses, a restaurant, etc.",
  image7: "https://www.fueladream.com/public/uploads/2299063830847716.1%20(1)",
  image8: "https://www.fueladream.com/public/uploads/8082654593167019.jpg",
  image8Heading:
    "Picture: A rendition of how the temple will look in the night.",
  image8Para:
    "This campaign aims to raise funds to build this temple complex. There is no amount that is too small and no amount that is too large. Read this story to learn more about the complex. As we said we estimate it will benefit 200 Lakh (20 million) visitors over a 10-year period. Your support will help us build this brick-by-brick.",
  radhaKrishnaHeading:
    "The pictures below show the 4 main deities of the Sri Radha Krishna Temple.",
  radhaKrishnaImage:
    "https://www.fueladream.com/public/uploads/1079745653628931.jpg",
  image9: "https://www.fueladream.com/public/uploads/8789517023663521.jpg",
  image9Para:
    "The picture above shows the Sri Srinivasa Govinda - A separate hall that would be build for Lord Venkateshwara.",
  image10: "https://www.fueladream.com/public/uploads/0635879202475694.05",
  image10Para:
    "Sri Radha Krishna Temple & Cultural Complex in Hubli-Dharwad is dedicated to ensuring a peaceful and enriching experience for all pilgrims. The temple's commitment is to provide a serene and spiritually uplifting environment where pilgrims can connect with their beliefs and find solace. Through its services, facilities, and serene atmosphere, the temple aims to enhance the pilgrimage experience, allowing visitors to immerse themselves in their spiritual journey and find tranquillity amidst the bustling world.",
  projectStatus:
    "https://www.fueladream.com/public/uploads/2023579609543168.jpg",
  projectMatter:
    "The above picture shows the construction status and images of the ISKCON Sri Radha Krishna Temple and Cultural Complex (Phase -1) which is coming up at Hubli-Dharwad in Karnataka. ",
  projectMatter1:
    "The construction of the first phase has begun, and people are already hard at work, pouring their hearts, minds, and talent into creating this wonderful temple. The temple will shine as a symbol of hope and will bring people together. It will encourage spiritual development and harmony in the community.",
  image11: "https://www.fueladream.com/public/uploads/2958530717826434.jpg",
  gratitude:
    "For those of you who can and want to fund large amounts, we would like to acknowledge the same by showcasing your name ( or the name of any relative or friend of yours) on the WALL OF GRATITUDE. ",
  image12: "https://www.fueladream.com/public/uploads/2746473098938051.jpg",
  iskconIcon: "https://www.fueladream.com/public/uploads/4329275686154190.jpg",
  iskconIcon2: "https://www.fueladream.com/public/uploads/3988970075241536.57",
  image13: "https://www.fueladream.com/public/uploads/6282857740331514.jpg",
  image14: "https://www.fueladream.com/public/uploads/6512989167048332.jpg",
  taxBenfits: "https://www.fueladream.com/public/uploads/2549700316384921.png",
};

const HomeSinglePage = () => {
  const { id } = useParams();

  const [tab, setTab] = useState(1);

  const { isLoading, isError, getSingleUser } = useSelector(
    (state) => state.clientUsers
  );
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentModel, setPaymentModel] = useState(false);
  const [formToggle, setFormToggle] = useState(false);
  const [errors,setErrors] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    mobileno: "",
    nationality: "Indian",
    country: "Indian",
    state: "",
    pincode: "",
    city: "",
    panno: "",
    address: "",
    amount: amount,
    username: "",
    campaignsid: id,
  });

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const handleClick = () => {
    if (amount === null) {
      return setErrorMessage("Please enter an amount");
    } else if (amount < 100) {
      return setErrorMessage("Minimum contribution amount is INR 100");
    }

    setErrorMessage("");
    setPaymentModel(true);
    setFormData({
      email: "",
      mobileno: "",
      nationality: "Indian",
      country: "Indian",
      state: "",
      pincode: "",
      city: "",
      panno: "",
      address: "",
      amount: amount,
      username: "",
      campaignsid: id,
    });
    setFormToggle(false)
  };

  
  const statesAndContry = {
    states: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const pincodeRegex = /^[0-9]{6}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const amountRegex = /^[0-9]+(\.[0-9]{1,2})?$/;

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Mobile number validation
    if (!formData.mobileno) {
      newErrors.mobileno = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobileno)) {
      newErrors.mobileno = "Please enter a valid 10-digit mobile number";
    }

    // State validation
    if (!formData.state) {
      newErrors.state = "State is required";
    }

    // Pincode validation
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }

    // PAN number validation
    if (!formData.panno) {
      newErrors.panno = "PAN number is required";
    } else if (!panRegex.test(formData.panno)) {
      newErrors.panno = "Please enter a valid PAN number";
    }

    // Amount validation
    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    } else if (!amountRegex.test(formData.amount)) {
      newErrors.amount = "Please enter a valid amount (e.g., 123.45)";
    }

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    // City validation
    if (!formData.city) {
      newErrors.city = "City is required";
    }

    // Address validation
    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
 
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (name === "email" && value.includes("@")) {
      setFormToggle(true);

      console.log(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(postPaymentFormData(formData))
    } 
  };

  return (
    <Box w={"100%"} position={"relative"} overflow={paymentModel ? "hidden" : "auto"}>

       {/* Loading */}
       {isLoading &&  <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        position={'fixed'}
        w={'100%'}
        bgColor={'rgb(0,0,0,0.6)'}
        zIndex={10}
      >
        <DottedAnimation />
      </Box>}

      {/* Payment Model */}
     {
       paymentModel && 
       <Box
       position={"fixed"}
       w={"100%"}
       h={"100vh"}
       overflow={"hidden"}
       bgColor={"rgb(0,0,0,0.6)"}
       zIndex={10}
       display={"flex"}
       alignItems={"center"}
       justifyContent={"center"}
     >
       <Box
         w={['95%','95%','95%','70%',"45%"]}
         mt={"5rem"}
         borderRadius={"10px"}
         bgColor={"white"}
         h={"auto"}
       >
         <HStack
           w={"100%"}
           bgColor={"red.500"}
           borderTopLeftRadius={"10px"}
           borderTopRightRadius={"10px"}
           p={"1rem"}
           justifyContent={"space-between"}
           fontWeight={"bold"}
           color={"white"}
           fontSize={"1.1rem"}
         >
           <Box>Amount: {amount}</Box>
           <Box onClick={()=>setPaymentModel(false)} cursor={'pointer'}>Close</Box>
         </HStack>
         <Box
           w={"90%"}
           mx={"auto"}
           py={"1rem"}
           h={"100px"}
           display={"flex"}
           justifyContent={"center"}
           alignItems={"center"}
         >
           <Input
             type="email"
             name="email"
             value={formData.email}
             border={"2px solid #CCCCCC"}
             placeholder="Enter Email ID*"
             onChange={handleOnChange}
           />
           {errors.email && <Box color="red.500">{errors.email}</Box>}
         </Box>
 
         <Box
           w={"90%"}
           mx={"auto"}
           h={formToggle ? "auto" : 0}
           overflow={"hidden"}
           transition="height 0.3s ease-in-out"
         >
           <form onSubmit={handleSubmit}>
             <Input
               onChange={handleOnChange}
               name="username"
               value={formData.username}
               border={"2px solid #CCCCCC"}
               type="text"
               placeholder="Full Name*"
             />
             {errors.username && <Box color="red.500">{errors.username}</Box>}
 
             <HStack my={"1rem"}>
               <VStack alignItems={"flex-start"} gap={"1px"} w={"100%"}>
                 <FormLabel>
                   <HStack>
                     <Box>Mobile No</Box>
                     <Box color={"red.500"}>*</Box>
                   </HStack>
                 </FormLabel>
                 <Input
                   onChange={handleOnChange}
                   name="mobileno"
                   value={formData.mobileno}
                   border={"2px solid #CCCCCC"}
                   type="tel"
                   placeholder="Enter Mobile Number"
                   w={"100%"}
                 />
                 {errors.mobileno && <Box color="red.500">{errors.mobileno}</Box>}
               </VStack>
 
               <VStack alignItems={"flex-start"} gap={"1px"} w={"100%"}>
                 <FormLabel>
                   <HStack>
                     <Box>Nationality</Box>
                     <Box color={"red.500"}>*</Box>
                   </HStack>
                 </FormLabel>
                 <Input
                   onChange={handleOnChange}
                   name="nationality"
                   value={formData.nationality}
                   border={"2px solid #CCCCCC"}
                   type="tel"
                   placeholder="Enter Nationality"
                   w={"100%"}
                 />
                 {errors.nationality && <Box color="red.500">{errors.nationality}</Box>}
               </VStack>
             </HStack>
 
             <HStack my={"1rem"}>
               <VStack alignItems={"flex-start"} gap={"1px"} w={"100%"}>
                 <FormLabel>
                   <HStack>
                     <Box>Country</Box>
                     <Box color={"red.500"}>*</Box>
                   </HStack>
                 </FormLabel>
                 <Input
                   onChange={handleOnChange}
                   name="country"
                   value={formData.country}
                   border={"2px solid #CCCCCC"}
                   type="tel"
                   placeholder="Enter Country"
                   w={"100%"}
                 />
                 {errors.country && <Box color="red.500">{errors.country}</Box>}
               </VStack>
 
               <VStack alignItems={"flex-start"} gap={"1px"} w={"100%"}>
                 <FormLabel>
                   <HStack>
                     <Box>State/Province/Region</Box>
                     <Box color={"red.500"}>*</Box>
                   </HStack>
                 </FormLabel>
                 <Select
                   w={"100%"}
                   border={"2px solid #CCCCCC"}
                   name="state"
                   value={formData.state}
                   onChange={handleOnChange}
                 >
                   {statesAndContry.states.map((state, index) => (
                     <>
                       <option value="">Select State</option>
                     <option key={index} value={state}>
                       {state}
                     </option>  
                     </>
                   ))}
                 </Select>
                 {errors.state && <Box color="red.500">{errors.state}</Box>}
               </VStack>
             </HStack>
 
             <Input
               onChange={handleOnChange}
               name="pincode"
               value={formData.pincode}
               border={"2px solid #CCCCCC"}
               type="text"
               placeholder="Pin/Zip Code*"
             />
             {errors.pincode && <Box color="red.500">{errors.pincode}</Box>}
 
             <HStack my={"1rem"}>
               <VStack alignItems={"flex-start"} gap={"1px"} w={"100%"}>
                 <FormLabel>
                   <HStack>
                     <Box>Town/City</Box>
                     <Box color={"red.500"}>*</Box>
                   </HStack>
                 </FormLabel>
                 <Input
                   onChange={handleOnChange}
                   name="city"
                   value={formData.city}
                   border={"2px solid #CCCCCC"}
                   placeholder="Enter Town/City"
                   w={"100%"}
                 />
                 {errors.city && <Box color="red.500">{errors.city}</Box>}
               </VStack>
 
               <VStack alignItems={"flex-start"} gap={"1px"} w={"100%"}>
                 <FormLabel>
                   <HStack>
                     <Box>PAN No*</Box>
                     <Box color={"red.500"}>*</Box>
                   </HStack>
                 </FormLabel>
                 <Input
                   onChange={handleOnChange}
                   name="panno"
                   value={formData.panno}
                   border={"2px solid #CCCCCC"}
                   type="tel"
                   placeholder="Enter Pan No."
                   w={"100%"}
                 />
                 {errors.panno && <Box color="red.500">{errors.panno}</Box>}
               </VStack>
             </HStack>
 
             <Input
               onChange={handleOnChange}
               name="address"
               value={formData.address}
               border={"2px solid #CCCCCC"}
               type="text"
               placeholder="Address, House NO, Street Address, Area Name, etc*"
             />
             {errors.address && <Box color="red.500">{errors.address}</Box>}
 
             <Input
               type="submit"
               value={"Pay Now"}
               bgColor={"red.500"}
               my={"1.5rem"}
               fontWeight={"bold"}
               color={"white"}
               w={"auto"}
               mx={"auto"}
               display={"block"}
               cursor={"pointer"}
             />
           </form>
         </Box>
       </Box>
     </Box>
 
     }
      {/* Header */}
      <Box
        w={"100%"}
        bgColor={"#EF4F5F"}
        color={"white"}
        py={"1.5rem"}
        px={["1.3rem", "1.5rem", "2rem"]}
      >
        <Box w={"100%"} maxW={"1200px"} mx={"auto"}>
          <Box
            fontWeight={"bold"}
            fontSize={"1.5rem"}
            w={["99%", "85%", "70%"]}
            maxW={"650px"}
            lineHeight={"2rem"}
          >
            {getSingleUser?.campaignDetails?.campaignName}'S CAMPAIGN TO BUILD A
            MAGNIFICENT SRI RADHA KRISHNA TEMPLE AND CULTURAL COMPLEX IN
            HUBLI-DHARWAD, KARNATAKA.
          </Box>
          <VStack alignItems={"left"} gap={"1rem"} mt={"0.8rem"}>
            <HStack>
              <Box>
                <FaLocationDot />
              </Box>
              <Box>Hubli-Dharwad, Karnataka, India</Box>
            </HStack>

            <HStack>
              <Box
                w={"80px"}
                h={"80px"}
                overflow={"hidden"}
                borderRadius={"50%"}
              >
                <Image
                  h={"100%"}
                  w={"100%"}
                  objectFit={"cover"}
                  src="https://fadcdn.s3.ap-south-1.amazonaws.com/media/organization/logo_ISKCON.png"
                />
              </Box>
              <VStack alignItems={"flex-start"} gap={"5px"}>
                <Box fontWeight={"bold"}>ISKCON HUBLI-DHARWAD</Box>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Box>

      {/* Image and Amount Details */}

      <HStack
        w="100%"
        maxW="1200px"
        mx="auto"
        my="2rem"
        alignItems="stretch"
        spacing={["2rem", "2rem", "1rem", "2rem"]}
        flexDirection={["column", "column", "row"]}
        px={["", "", "1rem", "2rem", ""]}
      >
        {/* Left Box */}
        <Box w={["97%", "97%", "97%", "50%"]} mx={"auto"}>
          <Box
            w="100%"
            h={["400px", "450px", "400px", "400px", "500px"]}
            overflow="hidden"
          >
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              src={getSingleUser?.campaignDetails?.imgurl}
            />
          </Box>
          <Box
            bgColor="#EDEAEA"
            mt="1rem"
            p="1rem"
            fontSize="1.3rem"
            fontWeight="semibold"
          >
            I am a concerned citizen and this campaign of mine aims to support
            the creation of a magnificent ISKCON Sri Radha Krishna Temple and
            Cultural complex in Hubli-Dharwad area of Karnataka.
          </Box>
        </Box>

        {/* Right Box */}
        <Box
          w={["97%", "97%", "97%", "50%"]}
          mx={"auto"}
          border="2px solid rgba(0, 0, 0, 0.4)"
          p="0.5rem"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            bgColor="#EF4F5F"
            color="white"
            py="1rem"
            px="1.5rem"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            h="auto"
          >
            <VStack width="100%" alignItems="flex-start" gap="0.5rem">
              <Box fontWeight="semibold" fontSize="2rem">
                RAISED
              </Box>
              <Box fontSize="2.2rem" fontWeight="bold">
                INR 799778887
              </Box>
              <Box fontSize="2rem" fontWeight="semibold">
                GOAL INR {getSingleUser?.campaignDetails?.targetAmount}
              </Box>
            </VStack>

            <HStack w={"100%"} justifyContent={"space-between"} my={"1rem"}>
              <VStack
                fontWeight={"semibold"}
                fontSize={"1.5rem"}
                gap={"2px"}
                alignItems={"flex-start"}
              >
                <Box>DAYS LEFT</Box>
                <Box fontSize={"1.8rem"}>
                  {getSingleUser?.campaignDetails?.days}
                </Box>
              </VStack>
              <VStack
                fontWeight={"semibold"}
                fontSize={"1.5rem"}
                gap={"2px"}
                alignItems={"flex-start"}
              >
                <Box>FUNDERS</Box>
                <Box fontSize={"1.8rem"}>{getSingleUser?.totalFunders}</Box>
              </VStack>
            </HStack>
            <Box>
              <ProgressBar
                currentAmount={getSingleUser?.raisedFund}
                goalAmount={getSingleUser?.campaignDetails?.targetAmount}
              />
            </Box>
          </Box>
          <VStack p="1rem" w={"100%"} alignItems={"flex-start"} gap={"1.5rem"}>
            <Box fontSize="1rem" fontWeight={"semibold"}>
              Accepts funds from Indian Passport / ID holders only.
            </Box>
            <VStack w={"100%"} gap={"1rem"}>
              {
                getSingleUser?.campaignDetails?.days === 0 ? 
                <Box fontSize={'1.2rem'} color={'red.500'}>
                   Successful
                </Box> : (
                   <Box w={"100%"}>
                   <Input
                     type="number"
                     placeholder="Enter Amount"
                     onChange={(e) => setAmount(e.target.value)}
                   />
                 </Box>
                )
              }
              <Button
                w={"100%"}
                bgColor="#EF4F5F"
                color={"white"}
                fontWeight={"bold"}
                fontSize={"1.1rem"}
                _hover={"none"}
                onClick={handleClick}
                isDisabled={getSingleUser?.campaignDetails?.days === 0}
              >
                CONTRIBUTE
              </Button>
              <Box fontWeight={"bold"} color={"red.500"}>
                {errorMessage}
              </Box>
              <Box fontWeight={"semibold"}>
                To contribute any amount without rewards.
              </Box>
            </VStack>
          </VStack>
        </Box>
      </HStack>

      {/* Tags */}

      <HStack
        w={"100%"}
        maxW={"1200px"}
        mx={"auto"}
        my={"1rem"}
        justifyContent={"space-between"}
        fontSize={["1rem"]}
        px={["0.5rem", "0.5rem", "2rem"]}
        flexDirection={["column", "column", "row"]}
        alignItems={"flex-start"}
        color={"rgb(0,0,0,0.7)"}
        gap={"0.9rem"}
      >
        <HStack gap={["8px"]} cursor={"pointer"}>
          <Box color={"#CA5D5D"} fontSize={["1.2rem"]}>
            <BsPinFill />
          </Box>
          <Box>Follow campain</Box>
        </HStack>
        <HStack gap={["8px"]} cursor={"pointer"}>
          <Box color={"#9EB875"} fontSize={["1.2rem"]}>
            <HiMiniTag />
          </Box>
          <Box>Idea, Arts & Culture</Box>
        </HStack>
        <HStack gap={["8px"]} cursor={"pointer"}>
          <Box color={"#C75C5C"} fontSize={["1.2rem"]}>
            <FaCalendarDays />
          </Box>
          <Box>Started from 03/12/2023</Box>
        </HStack>
        <HStack gap={["8px"]} cursor={"pointer"}>
          <Box color={"#C75C5C"} fontSize={["1.2rem"]}>
            <FaCalendarDays />
          </Box>
          <Box>Ended on 23/02/2024</Box>
        </HStack>
      </HStack>

      {/* Tabs  */}

      <HStack
        w={"100%"}
        maxW={"1200px"}
        mx={"auto"}
        my={"2.5rem"}
        py={"1.5rem"}
        borderTop={"2px dotted red"}
        borderBottom={"2px dotted red"}
        justifyContent={"space-around"}
      >
        <Box
          fontSize={["1.5rem"]}
          onClick={() => setTab(1)}
          cursor={"pointer"}
          borderBottom={tab === 1 ? "3px solid red" : ""}
          pb={".2rem"}
          borderRadius={"2px"}
        >
          Campaign
        </Box>
        <Box
          fontSize={["1.5rem"]}
          onClick={() => setTab(2)}
          cursor={"pointer"}
          borderBottom={tab === 2 ? "3px solid red" : ""}
        >
          Funders
        </Box>
      </HStack>

      {tab === 1 ? (
        <VStack
          w={"100%"}
          maxW={"1200px"}
          mx={"auto"}
          gap={"1.5rem"}
          my={"2rem"}
          alignItems={"flex-start"}
        >
          <Box w={"90%"} h={["200px", "210px", "250px"]} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image1} />
          </Box>
          <Box w={"90%"} h={["auto", "auto", "600px"]} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image2} />
          </Box>

          {/* The Context */}
          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box fontSize={"1.5rem"} fontWeight={"semibold"} color={"red.500"}>
              THE CONTEXT:
            </Box>
            <Box>{campaign.context}</Box>
          </VStack>

          {/* The Background */}

          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box fontSize={"1.5rem"} fontWeight={"semibold"} color={"red.500"}>
              THE BACKGROUND:
            </Box>
            <Box>{campaign.background}</Box>
            <Box>{campaign.background1}</Box>
            <Box fontWeight={"semibold"}>{campaign.background2}</Box>
          </VStack>

          {/* Image 3 */}

          <Box w={"90%"} h={["auto", "auto", "500px"]} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image3} />
          </Box>

          {/* Image Three Matter */}
          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box fontStyle={"italic"}>{campaign.image3Matter}</Box>
          </VStack>

          {/* Image 4 */}
          <Box w={"90%"} h={["auto", "auto", "500px"]} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image4} />
          </Box>

          {/* Image four Matter */}
          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box>{campaign.image4Para1}</Box>
            <Box fontWeight={"semibold"}>{campaign.image4Heading}</Box>
            <Box>{campaign.image4para2}</Box>
          </VStack>

          {/* Image 5 */}
          <Box w={"90%"} h={["auto", "auto", "500px"]} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image5} />
          </Box>

          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box>{campaign.image5Para}</Box>
          </VStack>

          {/* Youtube Vide */}

          <Box
            w={"90%"}
            h={["auto", "auto", "auto", "auto", "500px"]}
            mx={"auto"}
          >
            <Center mt={6}>
              <AspectRatio ratio={16 / 9} w="100%">
                <iframe
                  src="https://www.youtube.com/embed/NNu_TkGy-BU"
                  title="Construction Updates | Sri Radha Krishna Temple | ISKCON Hubli-Dharwad"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            </Center>
          </Box>

          {/* Heading */}

          <VStack
            w={"90%"}
            mx={"auto"}
            alignItems={"flex-start"}
            mt={{ xl: "8rem" }}
          >
            <Box fontWeight={"semibold"} fontStyle={"italic"}>
              Watch this video to get a better understanding of the ongoing
              project.
            </Box>

            {/* THE INITIATIVE */}
            <Box fontSize={"1.5rem"} fontWeight={"semibold"} color={"red.500"}>
              THE INITIATIVE:
            </Box>
            <Box>{campaign.initiative}</Box>
            <Box>{campaign.initiative1}</Box>
            <Box fontWeight={"semibold"}>{campaign.initiativeBold}</Box>
          </VStack>

          {/* image 6 */}

          <Box w={"90%"} h={["auto", "auto", "500px"]} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image6} />
          </Box>

          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box fontStyle={"italic"}>{campaign.image6para1}</Box>

            <Box fontSize={"1.5rem"} fontWeight={"semibold"} color={"red.500"}>
              {campaign.templeComplex}
            </Box>

            <Box>{campaign.templeComplexMatter}</Box>
          </VStack>

          {/* image 7 */}
          <Box w={"90%"} h={"auto"} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image7} />
          </Box>

          {/* image 8 */}
          <Box w={"90%"} h={["auto", "auto", "550px"]} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image8} />
          </Box>

          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box fontStyle={"italic"}>{campaign.image8Heading}</Box>

            <Box>{campaign.image8Para}</Box>
          </VStack>

          {/* Pictures of Radha Krishna */}

          <Box
            w={"90%"}
            h={"auto"}
            mx={"auto"}
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            color={"blue.500"}
          >
            {campaign.radhaKrishnaHeading}
          </Box>

          <Box w={"90%"} h={"auto"} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.radhaKrishnaImage} />
          </Box>

          {/* image 9 */}
          <Box w={"90%"} h={["auto", "auto", "500px"]} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image9} />
          </Box>

          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box>{campaign.image9Para}</Box>
          </VStack>

          {/* image 10 */}
          <Box w={"90%"} h={["auto", "auto", "500px"]} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image10} />
          </Box>

          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box>{campaign.image10Para}</Box>
          </VStack>

          {/* Heading */}
          <Box
            fontSize={"1.5rem"}
            fontWeight={"semibold"}
            color={"red.500"}
            w={"90%"}
            mx={"auto"}
          >
            PROJECT STATUS:
          </Box>

          {/* image Project */}
          <Box w={"90%"} h={"auto"} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.projectStatus} />
          </Box>

          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box fontStyle={"italic"}>{campaign.projectMatter}</Box>
            <Box>{campaign.projectMatter1}</Box>
          </VStack>

          {/* image 11 */}
          <Box w={"90%"} h={"auto"} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image11} />
          </Box>

          <VStack w={"90%"} mx={"auto"} alignItems={"flex-start"}>
            <Box fontSize={"1.5rem"} fontWeight={"semibold"} color={"red.500"}>
              {campaign.gratitude}
            </Box>
          </VStack>

          {/* image 12 */}
          <Box
            fontSize={"1.5rem"}
            fontWeight={"semibold"}
            w={"90%"}
            mx={"auto"}
          >
            READ MORE ABOUT THE WALL OF GRATITUDE BELOW :
          </Box>

          <Box w={"90%"} h={"auto"} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.image12} />
          </Box>

          {/* About Me */}

          <Box
            fontSize={"1.5rem"}
            fontWeight={"semibold"}
            w={"90%"}
            color={"red.500"}
            mx={"auto"}
          >
            ABOUT ME:
          </Box>

          <Box
            w={["90%", "90%", "50%"]}
            h={["400px", "450px", "400px", "400px", "500px"]}
            overflow="hidden"
            mx={"auto"}
          >
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              src={getSingleUser?.campaignDetails?.imgurl}
            />
          </Box>

          <VStack w={"90%"} mx={"auto"}>
            <Box>
              My name is {getSingleUser?.campaignDetails?.campaignName}. I am a
              concerned citizen. This campaign of mine aims to support the
              construction of this magnificent Sri Radha Krishna Temple and
              Cultural Complex in Hubli- Dharwad, Karnataka.
            </Box>
            <Box>
              I came forward to support the vision of the temple as it will
              impact millions of people. Just in the first 10 years, it is
              estimated to have 2 crore ( 200 lakh) visitors. I am thrilled that
              I have this opportunity to raise funds for a cause with a greater
              purpose. I firmly believe that if we all come together and do our
              little bit we would create something that will be remembered for
              generations.
            </Box>
            <Box>
              The total funds required to complete Phase 1 of the Sri Radha
              Krishna Temple and Cultural Complex in Hubli-Dharwad, Karnataka is
              huge. So please fund generously. Any amount big or small will be
              needed to make this dream come true. Together, let us create a
              sanctuary of solace and unity, a place where the spirit soars and
              where generations of people will come and find inspiration and
              peace.
            </Box>
          </VStack>

          {/* About Iskcon  */}
          <Box
            fontSize={"1.5rem"}
            fontWeight={"semibold"}
            w={"90%"}
            color={"red.500"}
            mx={"auto"}
          >
            ABOUT ISKCON:
          </Box>

          <Box w={"90%"} h={"auto"} mx={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign.iskconIcon} />
          </Box>

          <Box w={"90%"} mx={"auto"}>
            ISKCON stands for International Society for Krishna Consciousness.
            Srila Prabhupada who went to the United States of America in the
            year 1966 to spread the message of Krishna and engage people in the
            practice of the yuga-dharma (chanting of the holy names of Krishna)
            established this society in 1966. Srila Prabhupada incorporated this
            society with the vision of developing it into a worldwide
            organization. Today ISKCON comprises hundreds of temples, many rural
            communities, and hundreds of vegetarian restaurants.
          </Box>

          <VStack alignItems={"flex-start"} w={"90%"} mx={"auto"}>
            <Box>Seven purposes of ISKCON</Box>
            <ol>
              <li>Spread spiritual knowledge for unity and peace.</li>
              <li>Promote the consciousness of Krishna.</li>
              <li>Foster unity with Krishna as the core.</li>
              <li>Encourage congregational chanting.</li>
              <li>Establish a holy place for Krishna's pastimes.</li>
              <li>Teach a simpler, natural way of life.</li>
              <li>Publish and distribute spiritual literature.</li>
            </ol>
            {/* Iskcon 2 */}
            <Box w={"50%"} h={"auto"}>
              <Image w={"100%"} h={"100%"} src={campaign?.iskconIcon2} />
            </Box>
          </VStack>

          <VStack alignItems={"flex-start"} w={"90%"} mx={"auto"}>
            <Box fontWeight={"semibold"}>ISKCON-Hubli-Dharwad - History</Box>
            <Box>
              2005: ISKCON Was allotted 8.5 Acre of Land by Govt. Of Karnataka.
            </Box>
            <Box>2006: Sri Sri Krishna Balaram makeshift Temple was built.</Box>
            <Box>2011: Bhoomi Puja was performed for the new project.</Box>
            <Box>2013: Shilanyasa performed for the new project.</Box>
          </VStack>

          {/* About Iskcon  */}
          <Box
            fontSize={"1.5rem"}
            fontWeight={"semibold"}
            w={"90%"}
            color={"red.500"}
            mx={"auto"}
          >
            FESTIVALS HELD AT THE CURRENT MAKESHIFT TEMPLE OF SRI SRI KRISHNA
            BALARAM
          </Box>

          {/* image 13 */}

          <Box w={"90%"} mx={"auto"} h={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign?.image13} />
          </Box>

          {/* Map And Location  */}
          <Box
            fontSize={"1.5rem"}
            fontWeight={"semibold"}
            w={"90%"}
            color={"red.500"}
            mx={"auto"}
          >
            MAP AND LOCATION:
          </Box>

          {/* image 14 */}

          <Box w={"90%"} mx={"auto"} h={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign?.image14} />
          </Box>
          {/* TAX BENEFITS: */}
          <Box
            fontSize={"1.5rem"}
            fontWeight={"semibold"}
            w={"90%"}
            color={"red.500"}
            mx={"auto"}
          >
            TAX BENEFITS:
          </Box>

          {/* image 14 */}

          <Box w={"90%"} mx={"auto"} h={"auto"}>
            <Image w={"100%"} h={"100%"} src={campaign?.taxBenfits} />
          </Box>

          <Box w={"90%"} mx={"auto"}>
            Funding for this campaign is eligible for tax breaks as the ISKCON
            Hubli-Dharwad is a registered Trust and you can avail of benefits
            under section 80G of the IT Act. Foreign funding is not accepted.
          </Box>
        </VStack>
      ) : (
        <Box w={"95%"} maxW={"1200px"} mx={"auto"}>
          {getSingleUser?.Userlist?.length > 0 ? (
            getSingleUser?.Userlist?.map((funder) => (
              <HStack
                key={funder.id}
                borderBottom={"2px dotted red"}
                py={"2rem"}
                gap={"1rem"}
              >
                <Box
                  w={"50px"}
                  h={"50px"}
                  overflow={"hidden"}
                  borderRadius={"50%"}
                >
                  <Image
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    src="https://fadcdn.s3.amazonaws.com/defaults/default.png"
                  />
                </Box>
                <VStack
                  alignItems={["center"]}
                  flexDirection={["row"]}
                  w={"100%"}
                  justifyContent={"space-between"}
                >
                  <Box fontWeight={"bold"} fontSize={"1.5rem"}>
                    {funder?.username}
                  </Box>
                  <Box fontSize={"1.5rem"} fontWeight={"bold"}>
                    INR {funder?.amount}
                  </Box>
                </VStack>
              </HStack>
            ))
          ) : (
            <Box
              textAlign={"center"}
              w={"100%"}
              fontWeight={"bold"}
              fontSize={"1.1rem"}
              color={"red.500"}
            >
              No Funders Found
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default HomeSinglePage;
