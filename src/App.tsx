import "./index.css";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <div className="flex flex-row text-white gap-2 font-bold cursor-pointer text-lg">
        <p>Thoughts</p>
        <p>Storage</p>
      </div>
      <h1 className="text-center font-bold text-4xl pt-60 text-white">
        Say what you’re really thinking?
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
            className="w-20 h-14 border-none cursor-pointer bg-white text-black rounded-xl"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
