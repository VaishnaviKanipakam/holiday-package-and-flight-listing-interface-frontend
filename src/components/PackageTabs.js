import Button from "@mui/material/Button";

const PackageTabs = () => {
  return (
    <div className="flex flex-col items-start justify-start box-border mb-6">
      <div className="flex items-center justify-start">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            width: "200px",
            marginBottom: "65px",
            marginRight: "30px",
            fontWeight: "500",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          Indian Holidays
        </Button>

        <p
         
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#000000",
            width: "200px",
            marginBottom: "65px",
            marginRight: "30px",
            fontWeight: "500",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          International Holidays
        </p>
      </div>
      <div className="flex items-center">
        <h1 className="text-black font-semibold text-[18px] underline">
          Package with Flights
        </h1>
        <h1 className="text-[#5d5c5c] font-semibold text-[18px] ml-5">
          Package without Flights
        </h1>
      </div>
    </div>
  );
};

export default PackageTabs;
