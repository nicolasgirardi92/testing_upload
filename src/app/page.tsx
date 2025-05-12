import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold text-center sm:text-left">Bienvenido a mi página</h1>
          <p className="text-base text-gray-700 dark:text-gray-300 text-center sm:text-left">
            Esta página tiene como función ayudar a organizar las compras
          </p>
        </main>
        <div className="flex justify-center">
          <Image
              src="/store_icon.png"
              alt="Store image"
              width={200}
              height={300}
          />
        </div>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/default"
            rel="noopener noreferrer"
          >
            Crear Usuario
          </a>
          <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="/default"
              rel="noopener noreferrer"
          >
            Entrar con Usuario
          </a>
        </div>
      </main>
    </div>
  );
}
