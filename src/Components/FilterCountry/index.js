import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const FilterCountry = ({ onSelect }) => {
  
  const countriesTab = ["all","Africa","America","Asia","Europe","Oceania"];
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <div style={{borderRadius:"5px", padding:"10px 25px", cursor:"pointer"}}>
      <FormControl onChange={selectHandler}>
        <RadioGroup row defaultValue="all">
          {
            countriesTab.map((countrie)=>{
              return(
                <FormControlLabel value={countrie} control={<Radio orientation="horizontal" variant="soft" />} label={countrie} />
              )
            })
          }
        </RadioGroup>
      </FormControl>

    </div>
  );
};

export default FilterCountry;
