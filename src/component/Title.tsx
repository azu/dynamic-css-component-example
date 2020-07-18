import "./Title.css";
import React, { HTMLAttributes, ReactNode } from "react";

export type TitleProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;
export const Title = (props: TitleProps) => {
    return (
        <h1 {...props} className={["Title", props.className].join(" ")}>
            {props.children}
        </h1>
    );
};
