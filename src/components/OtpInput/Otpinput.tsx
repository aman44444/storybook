import React, {  useState} from "react";
import type { OtpProps } from "./Otp";

const Otp: React.FC<OtpProps> = ({length = 4, className, backgroundColor}
) => {
   const [input, setInput] = useState<string[]>(Array(length).fill(""))

   
   const nextSibling = (e:React.ChangeEvent<HTMLInputElement> , index: number) => {
      const inputEl = e.target as HTMLInputElement;

      const value = e.target.value.replace(/[^0-9]/g, "");

      const newInput = [...input];
      newInput[index] = value;
      setInput(newInput);
   
      if(value.length === 1) {
         const next  = inputEl.nextElementSibling as HTMLInputElement | null;
         next?.focus();
      }
   }

   const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
       const inputEl = e.target as HTMLInputElement;

      if (e.key === "Backspace" && inputEl.value === "") {
            const prev = inputEl.previousElementSibling as HTMLInputElement | null;
            prev?.focus();
     }
   }

 return (
    <>
       <div className={className}>
          {
            input.map((val, i) => (
               <input
                 key={i}
                 type="text"
                 inputMode="numeric"
                 maxLength={1}
                 value={val}
                 onChange={(e) => nextSibling(e,i)}
                 onKeyDown={handleKeyDown}
                 style={{
                  width: "40px",
                  height: "40px",
                  margin: "6px",
                  textAlign : "center",
                  fontSize : "20px",
                  backgroundColor,
                  color : "white"
                 }}
               />
            ))
          }
       </div>
    </>
 )
}

export default Otp;
