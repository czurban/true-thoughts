export default function Home() {
  return (
    <>
      <h1 className="text-center font-bold md:text-2xl lg:text-4xl pt-60 text-white">
        Say something sincere to yourself.
      </h1>
      <form>
        <div className="flex flex-row text-lg w-6/15 gap-2.5 h-14 justify-center items-center m-auto mt-10 rounded-lg">
          <input
            type="text"
            placeholder="Thoughts..."
            className="w-full h-14 border text-white pl-2 rounded-xl focus:outline-none"
          ></input>
          <button
            type="submit"
            className="w-20 h-14 border-none cursor-pointer bg-white text-zinc-950 rounded-xl hover:bg-zinc-600 hover:text-white transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
}
