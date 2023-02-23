
import React, {FC} from 'react';
import moment, {Moment} from "moment";

interface PropsType {
    date: Date | string,
    styles?: any,
    withoutSuffix?: boolean,
    fromNow?: boolean,
}

const DateText: FC<PropsType> = ({
    date,
    styles = {},
    withoutSuffix=false,
    fromNow=true,
}) => {
    const date_obj = moment(date);

    const date_now = moment(new Date());

    return (
        <span className={styles} >
            {fromNow || date_now.diff(date_obj, "days") < 1 ?
                date_obj.fromNow(withoutSuffix) :
                date_obj.format("D MMM HH:MM")
            }
        </span>
    );
};

export default DateText;