import { MainLayout, Container, Text, Button, Input } from "@metaflow/components";
import { MdChevronLeft } from "react-icons/md";
import { useState, useEffect, useContext } from "react";
import { validateEmail, validatePassword } from "@metaflow/utils/validation";
import { AuthContext } from "@metaflow/auth";
import { TemporaryUser } from "@metaflow/types";

type AuthStepProps = {
    title: string;
    inputType: string;
    description: string;
    onNext: () => void;
    onBack:() => void;
};

const AuthStep = ({title, inputType, description, onNext, onBack}:AuthStepProps) => {
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [value, setValue] = useState("")
  const [placeholder, setPlaceholder] = useState("")
  const { temporaryUser, updateTemporaryUser } = useContext(AuthContext);
  const [initialValue, setInitialValue]= useState("");

  useEffect(() => {
    setValue("");
    if (inputType === "email" && temporaryUser.email) {
      setValue(temporaryUser.email);
    }
    if (inputType === "text" && temporaryUser.username) {
      setValue(temporaryUser.username);
    }
    if (inputType === "password" && temporaryUser.password) {
      setValue(temporaryUser.password);
    }
  }, [inputType,
  temporaryUser.email,
  temporaryUser.password,
  temporaryUser.username]);


  useEffect(() => {
if (inputType === "email") {
    const isEmailValid = validateEmail(value);
    if (isEmailValid){
    setNextBtnDisabled(false);
    updateTemporaryUser({...temporaryUser, email: value})
  } else {
    setNextBtnDisabled(true);}
    setPlaceholder("enter your email");
}

if (inputType === "text") {
    const isUserNameValid = value.length > 2;
    if (isUserNameValid){
        console.log("name is valid", isUserNameValid);
    setNextBtnDisabled(false);
    updateTemporaryUser({...temporaryUser, username: value})

  } else {
    console.log("name is invalid", isUserNameValid);
    setPlaceholder("enter your username");

    setNextBtnDisabled(true);}
}

if (inputType === "password") {
    const isPasswordValid = validatePassword(value);
    if (isPasswordValid){
        console.log("name is valid", isPasswordValid);
    setNextBtnDisabled(false);
    updateTemporaryUser({...temporaryUser, password: value})

  } else {
    console.log("name is invalid", isPasswordValid);
    setPlaceholder("enter your password");
    setNextBtnDisabled(true);}
}

},[value])


    return(
        <Container variant="flexColLeft" className="w-full gap-[40px]">
        <Container variant="flexColLeft" className="">
          <Button className=" border-light-on-surface-light" variant="atras" icon={{
            position:"center",
            component:<MdChevronLeft size={42} className=" text-light-on-surface" />,
          }} onPress={onBack}/>
        </Container>
        <Container variant="flexColLeft">
          <Text variant="default" type="h2" className=" ubuntu-font">
           {title}
          </Text>
        </Container>
        <Container variant="flexColLeft" className="w-full">
          <Input 
          type={inputType}
          value={value} 
          placeholder={placeholder}
          onChange={(value) =>{console.log(value);
            setValue(value);
          }}
          disabled={false}  />
        </Container>
        <Container variant="flexColLeft">
          <Text variant="default" type="p1" className=" ubuntu-font">
          {description}
          </Text>
        </Container>
        <Container variant="flexColLeft" className="w-full">
          <Button fullWidth={true}
          disabled={nextBtnDisabled}
          className=" border-light-on-surface-light" variant="primary" 
          onPress={onNext}>Next</Button>
        </Container>
      </Container>
    );
};
export default AuthStep;