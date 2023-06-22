import { data } from "../Constants/Data";
import Header from "./Dashboard/Components/Header";
const Dashboard = () => {
  return (
    <div className="flex w-full flex-col text-sm px-4 md:px-16 items-center">
        <Header/>
        
      {/* Users Card */}
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

            {/*Online Status*/}
            <div className="flex w-[10%] items-center">
              {item.status === "active" ? (
                <div className="bg-black px-2 py-1 gap-1 text-white rounded-lg flex items-center justify-evenly">
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
              <div className="flex gap-1">
                <button>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </button>
                <button>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
