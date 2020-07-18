import React, { HTMLAttributes, ReactNode } from "react";

export type NavProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;
export const Nav = (props: NavProps) => {
    return (
        <nav {...props} className={["Nav", props.className].join(" ")}>
            {props.children}
        </nav>
    );
};
