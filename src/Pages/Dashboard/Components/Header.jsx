const Header = () => {
  return (
    <>
    {/* Column Names Card(top)*/}
    <div className="items-center py-4 flex w-full justify-evenly">
    {/* Selected checkbox Column*/}
    <div className="flex gap-2 w-[50%] items-center">
      <input
        type="checkbox"
        className=" accent-black h-5 w-5 rounded-full"
      />
      <h1>Selected</h1>
    </div>

    {/* Status Column*/}
    <div className="flex w-[10%] items-center">
      <h1>Status</h1>
      <div>
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          className="h-[1.5em] mt-[1px] align-middle"
        >
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 01.5.5v5.793l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L7.5 10.293V4.5A.5.5 0 018 4z"
          />
        </svg>
      </div>
    </div>

    {/* Email column */}
    <div className=" flex w-[18%]">
      <h1>Email address</h1>
    </div>

    {/* Teams column */}
    <div className="flex w-[22%]">
      <h1>Teams</h1>
    </div>
  </div>
  </>
  )
}

export default Header
