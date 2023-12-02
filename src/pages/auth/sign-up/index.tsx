/* eslint-disable react/no-unescaped-entities */
// COMPONENTS
import { MainLayout, Stepper, AuthStep, AuthConfirmation } from "@metaflow/components";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { AuthContext } from "@metaflow/auth";
import {FIREBASE_AUTH} from "@metaflow/auth/firebase/config";

export default function SignUp() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const {temporaryUser} = useContext(AuthContext);
  const handleRegistration = (email:string, password:string) => {

    createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorCode", errorCode);
  });

  }
  const steps:any = [
    <AuthStep
    key=""
      title="Escribe tu correo" 
      description="Escribe tu correo para poder crearte una cuenta en appdeejemplo :)" 
      inputType="email"
      onBack={()=>{router.back()}} 
      onNext={()=>{setActiveStep(1)}}/>,

      <AuthStep
    key=""
      title="Escribe tu nombre de usuario" 
      description="nombre de usuario mi compa " 
      inputType="text"
      onBack={()=>{setActiveStep(0)}} 
      onNext={()=>{setActiveStep(2)}}/>,

      <AuthStep
    key=""
      title="Escribe tu contraseña" 
      description="No escribas tu contraseña real, esto es una prueba" 
      inputType="password"
      onBack={()=>{setActiveStep(1)}} 
      onNext={()=>{setActiveStep(3);
      console.log("temporaryUser", temporaryUser);
      handleRegistration(temporaryUser.email, temporaryUser.password);
      }}/>,
      <AuthConfirmation key=""/>
      
  ]
  return (
    <MainLayout py={32} px={24}>
      <Stepper active={activeStep} streps={steps} />
      
    </MainLayout>
  );
}
