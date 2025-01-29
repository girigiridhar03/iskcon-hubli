import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const ProgressBar = ({currentAmount,goalAmount}) => {
     
    const [bar,setBar] = useState(null);

  
    useEffect(()=>{
       const proBar = () =>{
        if(currentAmount > goalAmount){
            return setBar("100%")
        }
         if(goalAmount > 0){
             const percentage = Math.min(((Number(currentAmount)/Number(goalAmount))*100),100);

             return percentage
         }
         return 0
       }

       setBar(proBar())
    },[currentAmount,goalAmount]);

  

  return (
<Box
  w="100%"
  bgColor="lightslategrey"
  h="10px"
  borderRadius="30px"
  my="0.8rem"
  overflow="hidden"
  position={'relative'}
>
  <Box
    w={`${bar}%`}
    h="100%"
    bgColor="green.200"
    transition="width 0.5s ease-in-out"
    willChange="width"
  >
  </Box>
</Box>
  )
}

export default ProgressBar
