import styled from 'styled-components';

//Footer

export const FooterLayout = styled.div`
width: 100%;
background-color: #f4f7fb;;
min-height: 100px;
padding-top: 10px;
padding-bottom: 10px;
color: #ffffff;
`;

export const Flex = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
text-align: left;
gap:4.5%;

`;

export const Heddline = styled.p`
font-size: 16px;
font-weight: 700;
letter-spacing: 0;
text-align: left;
color: #4f585e;
margin-bottom: 15px;

`;

export const P = styled.p`
line-height: 1.5;
font-size:14px;
cursor: pointer;
color:#4f585e
`
export const Para = styled.p`
font-size: 10px;
line-height: 0.2;
`;

export const ImageP = styled.img`
max-height: 30px;
margin-right: 15px;
`

export const IconSocial = styled.div`
width:40px;
height:40px;
background:teal;
border-radius:50%;
color:white
`