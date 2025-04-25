import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <Image
        src="/jenkins-logo.svg"
        alt="Jenkins Logo"
        width={180}
        height={37}
        priority
      />
      <h1 className="text-4xl font-bold">Jenkins!</h1>
      <h1 className="text-2xl">Realizando deploy com jenkins</h1>
      <h1 className="text-xl text-gray-500 mt-4">ambiente: {process.env.NEXT_PUBLIC_ENVIRONMENT}</h1>
    </div>
  );
}
