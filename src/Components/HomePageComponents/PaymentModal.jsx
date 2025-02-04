import { Box, Checkbox, FormLabel, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';


const PaymentModal = ({
    themeColor,
    amount,
    setPaymentModel,
    handleSubmit,
    handleOnChange,
    formData,
    errors
}) => {

    return (
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
                w={["95%", "95%", "95%", "70%", "45%"]}
                mt={"5rem"}
                borderRadius={"10px"}
                bgColor={"white"}
                h={"auto"}
            >
                <HStack
                    w={"100%"}
                    bgColor={themeColor}
                    borderTopLeftRadius={"10px"}
                    borderTopRightRadius={"10px"}
                    p={"1rem"}
                    justifyContent={"space-between"}
                    fontWeight={"bold"}
                    color={"white"}
                    fontSize={"1.1rem"}
                >
                    <Box>Amount: {amount}</Box>
                    <Box onClick={() => setPaymentModel(false)} cursor={"pointer"}>
                        Close
                    </Box>
                </HStack>


                <Box
                    w={"90%"}
                    mx={"auto"}
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
                            marginTop={"1rem"}
                        />
                        {errors.username && (
                            <Box color="red.500">{errors.username}</Box>
                        )}

                        <HStack my={"1rem"}>
                            <VStack alignItems={"flex-start"} gap={"1px"} w={"100%"}>
                                <FormLabel>
                                    <HStack>
                                        {/* <Box>Mobile No</Box>
                                                <Box color={"red.500"}>*</Box> */}
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
                                {errors.mobileno && (
                                    <Box color="red.500">{errors.mobileno}</Box>
                                )}
                            </VStack>
                        </HStack>


                        <HStack my={"1rem"}>
                            <HStack>
                                <Checkbox
                                    onChange={handleOnChange}
                                    name="prasadRequired"
                                    isChecked={formData.prasadRequired}
                                    size={"lg"}
                                >
                                    Prasad Required
                                </Checkbox>
                            </HStack>
                            <HStack>
                                <Checkbox
                                    onChange={handleOnChange}
                                    name="taxExemption"
                                    isChecked={formData.taxExemption}
                                    size={"lg"}
                                >
                                    80G Tax Exemption
                                </Checkbox>
                            </HStack>
                        </HStack>


                        {formData.taxExemption && <HStack my={"1rem"}>
                            <VStack alignItems={"flex-start"} gap={"1px"} w={"100%"}>

                                <Input
                                    type="text"
                                    onChange={handleOnChange}
                                    name="panno"
                                    value={formData.panno}
                                    border={"2px solid #CCCCCC"}
                                    placeholder="Enter Pan No."
                                    w={"100%"}
                                />
                                {errors.panno && <Box color="red.500">{errors.panno}</Box>}
                            </VStack>
                        </HStack>}

                        {formData.prasadRequired && <>
                            <Input
                                onChange={handleOnChange}
                                name="pincode"
                                value={formData.pincode}
                                border={"2px solid #CCCCCC"}
                                type="text"
                                placeholder="Pin/Zip Code*"
                                marginBottom={"1rem"}
                            />
                            {errors.pincode && <Box color="red.500">{errors.pincode}</Box>}

                            <Input
                                onChange={handleOnChange}
                                name="address"
                                value={formData.address}
                                border={"2px solid #CCCCCC"}
                                type="text"
                                placeholder="Address, House NO, Street Address, Area Name, etc*"
                            />
                            {errors.address && <Box color="red.500">{errors.address}</Box>}
                        </>
                        }
                        <Box
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
                                placeholder="Enter Email ID (Optional)"
                                onChange={handleOnChange}
                            />
                            {errors.email && <Box color="red.500">{errors.email}</Box>}
                        </Box>

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
    );
};

export default PaymentModal;