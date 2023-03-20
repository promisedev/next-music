import { useEffect, useState } from "react";
import Styles from "./equalizer.module.css";

const Equalizer = (props) => {
  const bars = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];
  let value = props.props;
  const [values, setValues] = useState(value);

  // const bg_value1 = Math.floor(   (value + 100) /20 );
  // const bg_value2 = Math.floor((value + 100) / 40);
  // const bg_value3 = Math.ceil( (value + 100)/50 );
  // const bg_value4 = ((((value + 100)/60)/20).toFixed(1))
  // console.log("floor:",bg_value1,"floor:",bg_value2,"ceil:",bg_value3,"round:",bg_value4)
  // useEffect(()=>{console.log(value)},[value])

  return (
    <div className={Styles.equal_body2}>
      {bars.map((bar, index) => {
        let bar_height;
        let bg_value;
        let background;

        if (index >= 0 && index < 5) {
          bar_height = 60 - (index + 20);
        }
        if (index >= 5 && index < 10) {
          bar_height = 10 + (index + 35);
        }
        if (index >= 10 && index < 17) {
          bar_height = 5 + (index + 60);
        }
        if (index >= 17 && index < 25) {
          bar_height = 80 - (index + 5);
        }
        if (index >= 25 && index < 30) {
          bar_height = 85 - (index + 2);
        }
        if (index >= 30 && index < 35) {
          bar_height = 45 + index;
        }
        if (index >= 35 && index < 45) {
          bar_height = 30 - (index - 50);
        }
        if (index >= 45 && index < 50) {
          bar_height = 45 - (index - 50);
        }
        // ////////////////////////color
      

        return (
          <div
            className={Styles.equal_bar}
            key={index}
            style={{ height: `${bar_height}%` }}
          />
        );
      })}
    </div>
  );
};

export default Equalizer;
