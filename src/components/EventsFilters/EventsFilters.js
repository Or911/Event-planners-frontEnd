import { MenuItem, Select, TextField} from "@mui/material";


function EventsFilters({ eventsData, filterData , setFilterData }) {


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilterData({ ...filterData, [name]: value });
  };

  return (
    <div className="events-filters">
      <Select value={filterData.categoryFilter} onChange={handleChange} name="categoryFilter" displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>כל קטגוריה</em>
        </MenuItem>
        {eventsData?.map(({ _id }) => (
          <MenuItem key={_id} value={_id}>
            {_id}
          </MenuItem>
        ))}
      </Select>
      <TextField id="date-filter" label="תאריך" type="date" name="dateFilter" 
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
    </div>
  );
}

export default EventsFilters;
