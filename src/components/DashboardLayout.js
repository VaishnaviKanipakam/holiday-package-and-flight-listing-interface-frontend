import Header from "./Header";
import SideBar from "./SideBar";

const HEADER_HEIGHT = "80px";
const SIDEBAR_WIDTH = "17vw";

const DashboardLayout = ({children}) => {
  return (
    <div className="min-h-screen bg-white box-border">
      <div className="box-border fixed top-0 left-0 w-full z-50 h-[80px] bg-white border-b-[1px] border-black">
        <Header />
      </div>

      <div
        className="fixed left-0 z-40 bg-[#eeeef7] box-border"
        style={{
          top: HEADER_HEIGHT,
          width: SIDEBAR_WIDTH,
          height: `calc(100vh - ${HEADER_HEIGHT})`,
          overflow: "scroll",
          scrollbarWidth: "none"
        }}
      >
        <SideBar />
      </div>

      <div className="bg-white box-border ml-[17vw] mt-[80px] p-[50px] h-[calc(100vh-80px)] overflow-y-auto no-scrollbar">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
