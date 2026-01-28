import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Checkbox from "@mui/material/Checkbox";

const SearchFilters = () => {
  return (
    <div className="flex flex-col items-start mb-10 justify-between w-ful box-border">
      <div className="flex items-center justify-start">
        <TextField
          label="Destination"
          variant="outlined"
          sx={{
            width: "350px",

            "& .MuiInputLabel-root": {
              color: "#797979",
              fontWeight: 600,
            },
            "& .MuiOutlinedInput-root": {
              height: "70px",
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#797979",
            },

            "& .MuiOutlinedInput-root fieldset": {
              borderColor: "#797979",
              borderWidth: "1.4px",
              borderRadius: "8px",
            },

            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: "#797979",
            },

            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#797979",
            },
          }}
        />
        <TextField
          label="Trip start date"
          variant="outlined"
          sx={{
            width: "140px",
            marginLeft: "20px",
            marginRight: "20px",

            "& .MuiInputLabel-root": {
              color: "#797979",
              fontWeight: 600,
            },
            "& .MuiOutlinedInput-root": {
              height: "70px",
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#797979",
            },

            "& .MuiOutlinedInput-root fieldset": {
              borderColor: "#797979",
              borderWidth: "1.4px",
              borderRadius: "8px",
            },

            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: "#797979",
            },

            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#797979",
            },
          }}
        />
        <TextField
          label="No.of Passengers"
          variant="outlined"
          sx={{
            width: "300px",

            "& .MuiInputLabel-root": {
              color: "#797979",
              fontWeight: 600,
            },
            "& .MuiOutlinedInput-root": {
              height: "70px",
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#797979",
            },

            "& .MuiOutlinedInput-root fieldset": {
              borderColor: "#797979",
              borderWidth: "1.4px",
              borderRadius: "8px",
            },

            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: "#797979",
            },

            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#797979 ",
            },
          }}
        />
        <div className="bg-black h-[70px] w-[60px] ml-3 rounded-xl flex items-center justify-center">
          <SearchOutlinedIcon
            sx={{ color: "#ffffff", fontWeight: "600", fontSize: "35px" }}
          />
        </div>
      </div>

      <div className="flex items-start justify-start mt-3">
        <div className="flex items-center justify-start">
          <h6 className="text-[#000000] font-semibold text-[15px] ">
            Hotel Standard
          </h6>
          <Button
            variant="outlined"
            sx={{
              border: "1.5px solid #000000",
              color: "#000000",
              width: "30px",
              height: "30px",
              marginLeft: "10px",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            3 <StarBorderOutlinedIcon sx={{ fontSize: "20px" }} />
          </Button>

          <Button
            variant="outlined"
            sx={{
              border: "1.5px solid #000000",
              color: "#000000",
              width: "30px",
              height: "30px",
              marginLeft: "10px",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            4 <StarBorderOutlinedIcon sx={{ fontSize: "20px" }} />
          </Button>

          <Button
            variant="contained"
            sx={{
              color: "#ffffff",
              backgroundColor: "#000000",
              width: "30px",
              height: "30px",
              marginLeft: "10px",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            5 <StarBorderOutlinedIcon sx={{ fontSize: "20px" }} />
          </Button>
        </div>

        <div className="flex items-center ml-20">
          <div className="flex items-center">
            <h6 className="text-[#000000] font-semibold text-[15px] ">
              Add Lunch
            </h6>
            <Checkbox
              defaultChecked
              sx={{
                color: "#000000",
                "&.Mui-checked": {
                  color: "#000000",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            />
          </div>
          <div className="flex items-center ml-8">
            <h6 className="text-[#000000] font-semibold text-[15px] ">
              Add Dinner
            </h6>
            <Checkbox
              
              sx={{
                color: "#000000",
                "&.Mui-checked": {
                  color: "#000000",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
