import React, { HTMLAttributes, ReactNode } from "react";

export type FooterProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;
export const Footer = (props: FooterProps) => {
    return (
        <footer {...props} className={["Footer", props.className].join(" ")}>
            {props.children}
        </footer>
    );
};
