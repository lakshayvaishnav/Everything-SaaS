import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
export default function Button(
    props: {
        variant: "primary" | "secondary";
    } & HTMLAttributes<HTMLButtonElement>
) {
    return <button></button>;
}
