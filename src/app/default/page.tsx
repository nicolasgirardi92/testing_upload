import React from "react";
import Link from "next/link";

export default function DefaultPage() {
    return (
        <div className="flex h-full flex-col justify-center min-h-screen items-center">
            <img
                src="construction-site.png"
                alt="Error"
                width={200}
                height={300}
            />

            <h1 className="text-4xl mb-5 font-bold" style={{ marginBottom: "35px" }}>
                Esta página se encuentra en construccion
            </h1>
            <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="/"
            >
                Volver a inicio
            </Link>
            <span className="text-7xl"></span>
        </div>
    );
}