import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Img,
} from '@chakra-ui/react';


export default function ProductSimple({ srcSet, alt, mrp, discount }) {
    return (
        <Center py={2} >

            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>

                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'contain'}
                        src={srcSet}
                    />
                </Box>
                <Box
                    width='80px'
                    h='25px'
                    textAlign='center'
                    left='0'
                    top='0'
                    fontSize='14px'
                    fontWeight='700'
                    color='#fff'
                    borderRadius='6px 0 0 0'
                    backgroundImage='https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg' position='absolute' >
                    {discount} OFF
                </Box>

                <Stack pt={10} align={'center'}>

                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        Natural
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} textOverflow='ellipsis' h='50px' overflow='hidden'>
                        {alt}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            ₹{mrp}
                        </Text>
                        <Text textDecoration={'line-through'} color={'gray.600'}>
                            ₹199
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}