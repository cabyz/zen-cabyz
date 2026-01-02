import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

export const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            style={{
                backgroundColor: variant === "primary" ? "black" : "white",
                color: variant === "primary" ? "white" : "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "1px solid black",
                cursor: "pointer",
                ...props.style
            }}
        >
            {children}
        </button>
    );
};
