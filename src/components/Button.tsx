import { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-200 text-purple-600"
}

const defaultStyles = "flex justify-center item-center px-4 py-2 rounded-md font-light text-sm";

export function Button({variant, text, startIcon}: ButtonProps){
    return <button className={`${variantStyles[variant]} ${defaultStyles} `}>
       <div className="pr-2">
       {startIcon}
       </div>
        {text}
    </button>
}