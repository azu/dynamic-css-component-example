import React, { HTMLAttributes, ReactNode } from "react";

export type SidebarProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;
export const Sidebar = (props: SidebarProps) => {
    return (
        <aside {...props} className={["Sidebar", props.className].join(" ")}>
            {props.children}
        </aside>
    );
};
