import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Date = ({ handleDate, title, views }) => {
   const [date, setDate] = useState(dayjs());
   useEffect(() => {
      handleDate(dayjs(date).format());
   }, [date]);
   const tomorrow = dayjs().add(1, "day");
   return (
      <div className="flex flex-col">
         <label>{title}</label>
         <DatePicker
            disableFuture
            defaultValue={tomorrow}
            views={views}
            value={date}
            onChange={(newDate) => setDate(newDate)}
         />
      </div>
   );
};

export default Date;
Date.propTypes = {
   handleDate: PropTypes.func,
   title: PropTypes.string,
   views: PropTypes.array,
};
