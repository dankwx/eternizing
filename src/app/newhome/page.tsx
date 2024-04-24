export default function NewHome() {
  return (
    <div className="flex w-full pt-2">
      <div className="flex-col w-1/3">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl px-6 pb-4">
          Eternizing
        </h2>
        <p className="text-xl tracking-tight text-gray-900 sm:text-5xl md:text-xl px-6">
          Wants to showoff that you discovered something before gets popular?{" "}
          <br />
          <br />{" "}
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
            That's the right place, for free, forever.
          </span>
          <br />
          <br />
        </p>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-2xl px-6 pb-4">
          1. Choose your content you want to reinvindicate <br />
          <br />
          2. Eternize.
        </p>
      </div>
      <div className="flex-col flex-grow bg-yellow-300"></div>
    </div>
  );
}
