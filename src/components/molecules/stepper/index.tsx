import { useState, useEffect } from "react";


type StepperProps = {
    streps: any[];
    active: number;

};

const Stepper = ({streps, active}:StepperProps) => {
    return(
        <>{streps[active]}</>
    )
}

export default Stepper;