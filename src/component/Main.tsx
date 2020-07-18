import React, { HTMLAttributes, ReactNode } from "react";
import * as CSS from "csstype";
import "./Main.css";
export type MainProps = {
    style: CSS.Properties & {
        "--border": string;
    };
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;
export const Main = (props: MainProps) => {
    return (
        <main {...props} className={["Main", props.className].join(" ")}>
            {props.children}
        </main>
    );
};
