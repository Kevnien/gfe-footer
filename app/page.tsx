import GfeFooter from "./gfe-footer";
// import KevinGfeFooter from "./kevin-gfe-footer";

const username = "kevinn858";
const name = "Kevin Nguyen";

export default function Home() {
  // return <KevinGfeFooter />;
  return (
    <>
      <main className="flex flex-col items-center p-4 gap-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold">Sample page</h1>
        <p>
          {"Here's the sample content. Your footer should be at the bottom."}
        </p>
      </main>
      <GfeFooter username={username} name={name} />
    </>
  );
}
