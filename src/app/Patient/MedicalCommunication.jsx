// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Button, Container, Stack, Text, Title } from "@mantine/core"
import { useState,useEffect } from "react"
import StartChat from "../../components/MedicalCommunication/StartChat"
import ChatMessages from "../../components/MedicalCommunication/ChatMessages"

const MedicalCommunication = ()=>{


    const [active,setActive] = useState(false)
    const [firstActive,setFirstActive] = useState(true)

const fadeIn = {
  animation: "fadeIn 1s forwards",
};

const fadeOut = {
  animation: "fadeOut 0.7s forwards",
};

const keyframes = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-20px); }
  }
`;
const StyleTag = () => (
  <style>
    {keyframes}
  </style>
);

      // const [active, setActive] = useState(false);
      const [click, setClick] = useState();
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user)
      useEffect(() => {
        
        setClick(user.first_use_seen);  
      }, [user]);
  
      useEffect(() => {
        // setActive(false)
          setTimeout(() => {
              setFirstActive(false);
          }, 700);
      }, []);

    return (
    <>
      <StyleTag />
      {click && (
        <Container
          style={!firstActive ? fadeIn : fadeOut}
          p={10}
          fluid
        >
          <StartChat  setClick={setClick} setActive={setActive} setFirstActive={setFirstActive}/>
        </Container>
      )}

      {!click  && (
        <Container
          style={!active ? fadeIn : fadeOut}
          p={10}
          fluid
          mb={'5rem'}
        >
            <ChatMessages/>
          
        </Container>
      )}
    </>
  );
}
export default MedicalCommunication