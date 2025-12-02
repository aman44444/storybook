import React, { useState} from "react";

const Otp: React.FC = () => {
   const [input, setInput] = useState<string[]>(["", "", "", ""])
   
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
       <div>
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
               />
            ))
          }
       </div>
    </>
 )
}

export default Otp;