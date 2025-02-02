import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const ProgressBar = ({ currentAmount, goalAmount }) => {

  const [bar, setBar] = useState(null);
  const [pointerPosition, setPointerPosition] = useState(0);

  useEffect(() => {
    const proBar = () => {
      if (currentAmount > goalAmount) {
        return setBar("100%");
      }
      if (goalAmount > 0) {
        const percentage = Math.min(((Number(currentAmount) / Number(goalAmount)) * 100), 100);
        setBar(percentage)
        return percentage
      }
      return 0;
    }

    const barPercentage = proBar();
    setPointerPosition(barPercentage); // Set the pointer position dynamically

  }, [currentAmount, goalAmount]);

   console.log(bar)

  return (
    <Box
      w="100%"
      bgColor="gray.500"  // Set background to gray
      h="10px"
      borderRadius="30px"
      my="0.8rem"
      overflow="hidden"
      position={'relative'}
    >
      <Box
        w={`${bar}%`}
        h="100%"
        bgColor="green.400"  // Set progress color to green
        transition="width 0.5s ease-in-out"
        willChange="width"
      >
      </Box>
    </Box>
  )
}

export default ProgressBar
