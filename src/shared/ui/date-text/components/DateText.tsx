
import React, {FC} from 'react';
import moment, {Moment} from "moment";

interface PropsType {
    date: Date | string,
    styles?: any,
    withoutSuffix?: boolean,
    fromNow?: boolean,
    showOnlyTime?: boolean,
}

const DateText: FC<PropsType> = ({
    date,
    styles = {},
    withoutSuffix=false,
    fromNow=true,
    showOnlyTime=false,
}) => {
    const date_obj = moment(date);

    const date_now = moment(new Date());

    if (showOnlyTime && date_now.diff(date_obj, "hours") > 3)
        return <span className={styles}>{date_obj.format("HH:MM")}</span>;

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