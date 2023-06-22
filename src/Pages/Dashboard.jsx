import { data } from "../Constants/Data";
const Dashboard = () => {
  return (
    <div className="flex w-full flex-col md:text-base text-xs px-4 md:px-16 items-center">
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
      {data.map((item, index) => (
        <div className="flex w-full py-3 border-t" key={index}>
          <div className="flex flex-row justify-evenly w-full items-center">
            {/* Selected column */}
            <div className="flex items-center gap-2 w-[50%]">
              <input
                type="checkbox"
                className=" accent-black h-5 w-5 rounded-full"
              />
              <div className="flex gap-2 items-center">
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="rounded-full bg-slate-300 h-[40px] w-[40px] bg-center bg-cover"
                >
                  {/*Image Container*/}
                </div>
                <div className="flex flex-col">
                  <h2>{item.name.username}</h2>
                  <p className="text-gray-600">{item.name.alias}</p>
                </div>
              </div>
            </div>

            {/*Status*/}
            <div className="flex w-[10%] items-center">
              {item.status === "active" ? (
                <div className="bg-black px-2 gap-1 text-white rounded-lg flex items-center justify-evenly">
                  <div className="w-[0.5em] h-[0.5em] bg-white rounded-full">
                    {/*Activity Dot*/}
                  </div>
                  <p>{item.status}</p>
                </div>
              ) : (
                <div className="items-center justify-evenly flex px-2 gap-1">
                  <div className="w-[0.5em] h-[0.5em] bg-black rounded-full">
                    {/*Activity Dot*/}
                  </div>
                  <p>{item.status}</p>
                </div>
              )}
            </div>
            {/* Email column */}
            <div className=" flex w-[18%] items-center">
              <h1 className="text-gray-600">{item.email}</h1>
            </div>
            {/* Teams column */}
            <div className="flex w-[22%] justify-between items-center">
              <div className="flex gap-1">
                {item.team.map((teamMember, teamIndex) => (
                  <p
                    key={teamIndex}
                    className="border-gray-600 px-2 border-[1.5px] rounded-lg"
                  >
                    {teamMember}
                  </p>
                ))}
              </div>
              <div className="flex"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
