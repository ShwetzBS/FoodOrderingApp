export const contactUs = () => {
  return (
    <div>
      <h1 className="font-bold p-4 m-4 text-3xl">
        Contact Number : 988989898989
      </h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="p-2 m-2 border border-black"
        ></input>
        <input
          type="text"
          placeholder="message"
          className="p-2 m-2 border border-black"
        ></input>
        <button className="border border-black text-white p-2 m-2 bg-black rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
