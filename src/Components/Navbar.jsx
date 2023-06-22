import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-row shadow-sm top-0 sticky w-full py-4 justify-between items-center px-4 md:px-16">
      {/*Logo*/}
      <div className="items-center">
        <h1 id="logo" className="text-md md:text-xl">
          members
        </h1>
      </div>
      {/*Right side Buttons Container*/}
      <div className="md:flex items-center gap-3 hidden">
        {/*Search Bar*/}
        <div className="items-center bg-gray-300 text-gray-500 overflow-hidden rounded-md">
          <div className="flex items-center p-1">
            <svg
              className="h-[1.3em] pr-1 align-middle"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="bg-gray-300 focus:outline-none text-gray-800 text-sm w-full"
            />
          </div>
        </div>

        {/*Download CSV button*/}
        <div className="items-center text-sm font-semibold text-gray-800">
          <button className="w-full px-3 justify-center items-center flex gap-1 p-1 hover:bg-gray-300 rounded-md border-gray-300 border-[0.1em]">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="h-[1.3em]"
            >
              <path d="M8 17l4 4 4-4M12 12v9" />
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
            </svg>
            Download CSV
          </button>
        </div>

        {/*Add New User Button*/}
        <div className="items-center text-sm font-semibold text-white">
          <button className="w-full px-3 justify-center items-center bg-gray-900 flex gap-1 p-1 hover:bg-gray-700 rounded-md">
            + Add User
          </button>
        </div>
      </div>

      {/*Mobile Menu container*/}
      <div className="items-center md:hidden block">
        <button onClick={handleMenu}>
          {open ? (
            <svg
              viewBox="0 0 470 1000"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
            </svg>
          ) : (
            <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
              <path
                fill="currentColor"
                d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 010-1.99h8.01c.55 0 .995.445.995.995zM22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 110-1.99h18.01c.55 0 .995.446.995.995zM21.005 6.99a.995.995 0 000-1.99H8.995a.995.995 0 100 1.99h12.01z"
              />
            </svg>
          )}
        </button>
        {open ? (
          <div
            id="menu"
            className="top-16 right-0 h-screen w-1/2 bg-white shadow-xl absolute"
          >
            <ul className=" p-4 gap-2 flex flex-col">
              <li>
                <div className="items-center bg-gray-300 text-gray-500 overflow-hidden rounded-md">
                  <div className="flex items-center p-1">
                    <svg
                      className="h-[1.3em] pr-1 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      className="bg-gray-300 focus:outline-none text-gray-800 text-sm w-full"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="items-center text-sm font-semibold text-gray-800">
                  <button className="w-full px-3 justify-center items-center flex gap-1 p-1 hover:bg-gray-300 rounded-md border-gray-300 border-[0.1em]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="h-[1.3em]"
                    >
                      <path d="M8 17l4 4 4-4M12 12v9" />
                      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                    </svg>
                    Download CSV
                  </button>
                </div>
              </li>
              <li>
                <div className="items-center text-sm font-semibold text-white">
                  <button className="w-full px-3 justify-center text-center items-center bg-gray-900 flex gap-1 p-1 hover:bg-gray-700 rounded-md">
                    + Add User
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
