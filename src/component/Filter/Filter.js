import React, { useState } from "react";
import { useCart, useCartActions } from "../../Providers/CartProdvicer";
import SelectComponent from "../../common/select/select";
import styles from "./Filter.module.css";
import Search from "../../common/Search/Search";
import SelectComponentcolor from "../../common/select/selectColor";
const Filter = () => {
  const dispatch = useCartActions();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");
  const changeHandler = (selectedOption) => {
    console.log(selectedOption);
    setValue(selectedOption);
    dispatch({ type: "filter", payload: selectedOption });
  };

   const [Color, setColor] = useState("");
   const changeHandlerColor = (selectedOptionColor) => {
     console.log(selectedOptionColor);
     setColor(selectedOptionColor);
     dispatch({ type: "filtercolor", payload: selectedOptionColor });
   };
  const sortHandler = (selectedOption) => {
    setSort(selectedOption);
    dispatch({ type: "sort", payload: selectedOption });
  };
  const options = [
    { value: "", label: "یک مورد انتخاب کنید" },
    { value: "37", label: "37" },
    { value: "38", label: "38" },
    { value: "39", label: "39" },
    { value: "40", label: "40" },
    { value: "41", label: "41" },
 
  ];

  const options2 = [
    { value: "", label: "یک مورد انتخاب کنید" },
    { value: "زرد", label: "زرد" },
    { value: "سفید", label: "سفید" },
    { value: "مشکی", label: "مشکی" },
    { value: "صورتی", label: "صورتی" },
  ];

  const sortOption = [
    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowest" },
  ];
  return (
    <>
      <div className={styles.filter}>
        <SelectComponent
          placeholder={"یک گزینه را انتخاب کنید"}
          className={"mb-3 px-3 w-100"}
          title="انتخاب سایز : "
          value={value}
          onChange={changeHandler}
          options={options}
        />
        <SelectComponentcolor
          placeholder={"یک گزینه را انتخاب کنید"}
          className={"mb-3 px-3"}
          title="انتخاب رنگ : "
          value={Color}
          onChange={changeHandlerColor}
          options={options2}
        />
        {/* <SelectComponent
          className={"mb-3"}
          title="sort by"
          value={sort}
          onChange={sortHandler}
          options={sortOption}
        /> */}
      </div>
    </>
  );
};

export default Filter;
