import {
  TextField,
  MenuItem,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";

export default function InvoiceForm() {
  return (
    <div className="flex h-screen w-full flex-col gap-6 pt-4">
      {/*----------------------------------------- Invoice Details Section -------------------------------------------- */}
      <div className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-md">
        {/* Invoice Number */}
        <div className="flex flex-col gap-1">
          <Typography>Invoice Number</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "10px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
          />
        </div>

        {/* Invoice Date */}
        <div className="flex flex-col gap-1">
          <Typography>Invoice Date</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "10px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
          />
        </div>

        {/* Invoice Status */}
        <div className="flex flex-col gap-1">
          <Typography>Invoice Status</Typography>

          <TextField
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "12px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            InputProps={{ readOnly: true }} // Makes input read-only
          >
            <MenuItem value="USD" disabled>
              USD - US Dollar
            </MenuItem>
            <MenuItem value="EUR" disabled>
              EUR - Euro
            </MenuItem>
            <MenuItem value="INR" disabled>
              INR - Indian Rupee
            </MenuItem>
          </TextField>
        </div>
        {/* Note */}
        <div className="flex flex-col gap-1">
          <Typography>Note</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "10px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/*----------------------------------------------- Booking Details Section ----------------------------------------*/}
      <div className="flex flex-col gap-5 rounded-lg bg-white p-4 shadow-md">
      <Typography className="!text-2xl !font-semibold">Brokerage Information</Typography>
      <div className="flex flex-col gap-3 ">
        {/* Booking detail */}
        <div className="flex flex-col gap-1">
          <Typography>Booking detail</Typography>

          <TextField
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "12px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            InputProps={{ readOnly: true }} // Makes input read-only
          >
            <MenuItem value="USD" disabled>
              USD - US Dollar
            </MenuItem>
            <MenuItem value="EUR" disabled>
              EUR - Euro
            </MenuItem>
            <MenuItem value="INR" disabled>
              INR - Indian Rupee
            </MenuItem>
          </TextField>
        </div>
        {/* Project */}
        <div className="flex flex-col gap-1">
          <Typography>Project</Typography>

          <TextField
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "12px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            InputProps={{ readOnly: true }} // Makes input read-only
          >
            <MenuItem value="USD" disabled>
              USD - US Dollar
            </MenuItem>
            <MenuItem value="EUR" disabled>
              EUR - Euro
            </MenuItem>
            <MenuItem value="INR" disabled>
              INR - Indian Rupee
            </MenuItem>
          </TextField>
        </div>
        {/* Invoice to/bill to */}
        <div className="flex flex-col gap-1">
          <Typography>Invoice to/bill to</Typography>

          <TextField
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "12px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            InputProps={{ readOnly: true }} // Makes input read-only
          >
            <MenuItem value="USD" disabled>
              USD - US Dollar
            </MenuItem>
            <MenuItem value="EUR" disabled>
              EUR - Euro
            </MenuItem>
            <MenuItem value="INR" disabled>
              INR - Indian Rupee
            </MenuItem>
          </TextField>
        </div>
        {/* Project Tower / Building Name */}
        <div className="flex flex-col gap-1">
          <Typography>Project Tower / Building Name</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "10px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
          />
        </div>
        {/* Brokerage Name */}
        <div className="flex flex-col gap-1">
          <Typography>Brokerage Name</Typography>

          <TextField
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "12px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            InputProps={{ readOnly: true }} // Makes input read-only
          >
            <MenuItem value="USD" disabled>
              USD - US Dollar
            </MenuItem>
            <MenuItem value="EUR" disabled>
              EUR - Euro
            </MenuItem>
            <MenuItem value="INR" disabled>
              INR - Indian Rupee
            </MenuItem>
          </TextField>
        </div>
        {/* Expected Payment Date */}
        <div className="flex flex-col gap-1">
          <Typography>Expected Payment Date</Typography>

          <TextField
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "12px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            InputProps={{ readOnly: true }} // Makes input read-only
          >
            <MenuItem value="USD" disabled>
              USD - US Dollar
            </MenuItem>
            <MenuItem value="EUR" disabled>
              EUR - Euro
            </MenuItem>
            <MenuItem value="INR" disabled>
              INR - Indian Rupee
            </MenuItem>
          </TextField>
        </div>
      </div>
      </div>

       {/*----------------------------------------------- Address Section ----------------------------------------*/}
       <div className="flex flex-col gap-5 rounded-lg bg-white p-4 shadow-md">
      <Typography className="!text-2xl !font-semibold">Address Details</Typography>
      <div className="flex flex-col gap-3 ">
        {/* Booking detail */}
        <div className="flex flex-col gap-1">
          <Typography>Billing address</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "10px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
          />
        </div>
        {/* City */}
        <div className="flex flex-col gap-1">
          <Typography>City</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "10px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
          />
        </div>
        {/* State */}
        <div className="flex flex-col gap-1">
          <Typography>State</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "8px",
              background: "rgba(183, 183, 183, 0.32)",
              "& fieldset": { border: "none" }, // Remove border
              "& .MuiOutlinedInput-input": {
                padding: "10px 15px", // Set padding to 5px
              },
            }}
            className="w-full rounded-lg"
          />
        </div>
      </div>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-md">
        
       

        <div className="flex gap-4">
          <TextField
            label="Brokerage Amount"
            fullWidth
            className="mb-3"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">INR</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Tax Amount"
            fullWidth
            className="mb-3"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">INR</InputAdornment>
              ),
            }}
          />
        </div>

        <div className="flex gap-4">
          <TextField
            label="Total Amount Received"
            fullWidth
            className="mb-3"
            value="00"
            disabled
          />
          <TextField
            label="Total Amount Pending"
            fullWidth
            className="mb-3"
            value="00"
            disabled
          />
        </div>
      </div>

    

      {/* Save Button */}
      <div className="text-right">
        <Button variant="contained" color="primary" className="!bg-cyan-500">
          Save
        </Button>
      </div>
    </div>
  );
}
