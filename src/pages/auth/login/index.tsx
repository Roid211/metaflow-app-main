import { MainLayout, Stepper, AuthStep, AuthConfirmation2 } from "@metaflow/components";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@metaflow/auth";
import {FIREBASE_AUTH} from "@metaflow/auth/firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login () {
    const [activeStep, setActiveStep] = useState(0);
    const router = useRouter();
    const {temporaryUser} = useContext(AuthContext);

    const handleLogin = (email:string, password:string) => {
    signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setActiveStep(2);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


    }

    const steps:any = [
    <AuthStep
    key=""
      title="Escribe tu correo" 
      description="Escribe tu correo para ingresar" 
      inputType="email"
      onBack={()=>{router.back()}} 
      onNext={()=>{ setActiveStep(1)}}/>,
      <AuthStep
      key=""
        title="Escribe tu contraseña" 
        description="Escribe tu contraseña de prueba" 
        inputType="password"
        onBack={()=>{setActiveStep(0)}}
        onNext={()=>{
        handleLogin(temporaryUser.email, temporaryUser.password);
        }}/>,
        <AuthConfirmation2 key=""/>

  ]

return (
    <MainLayout py={32} px={24}>
      <Stepper active={activeStep} streps={steps} />
      
    </MainLayout>
  );
}

