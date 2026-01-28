import FlightCard from "./FlightList/FlightCard"
import PackageTabs from "./PackageTabs"
import SearchFilters from "./SearchFilters"
import RouteInfo from "./RouteInfo"
import FareSummary from "./FareSummary"

const Dashboard = () => {
  return (
    <div className="bg-[#eeeef7] rounded-xl p-[30px] w-full h-full box-border">
      <PackageTabs />
      <SearchFilters />
       <RouteInfo />
       <FareSummary />
      <FlightCard />
    </div>
  )
}

export default Dashboard
