import Link from "next/link";
import React from "react";

const Pages = ({ searchParams }) => {
    const select1 = searchParams.value1 || "black";
    const select2 = searchParams.value2 || "red";
    return (
        <div>
            <Link
                href={`?${new URLSearchParams({
                    value1: "Hitam",
                    value2: select2,
                })}`}
            >
                Tombol 1
            </Link>
            <Link
                href={`?${new URLSearchParams({
                    value1: select1,
                    value2: "Merah",
                })}`}
            >
                Tombol 2
            </Link>
            <p>{select1}</p>
            <p>{select2}</p>
        </div>
    );
};

export default Pages;
