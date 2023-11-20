import {format, formatDistanceToNow, getTime} from 'date-fns';

// ----------------------------------------------------------------------

export function fMonthYear(date, newFormat) {
    const fm = newFormat || 'MMM yyyy';

    return date ? format(new Date(date), fm) : '';
}

export function fDateMonth(date, newFormat) {
    const fm = newFormat || 'dd MMM';

    return date ? format(new Date(date), fm) : '';
}

export function fDate(date, newFormat) {
    const fm = newFormat || 'dd MMM yyyy';

    return date ? format(new Date(date), fm) : '';
}

export function fDay(date) {
    const options = {weekday: 'long'};
    return date ? format(new Date(date?.slice(0, 10)), 'eeee', options) : '';
}


export function fDateTime(date, newFormat) {
    const fm = newFormat || 'dd MMM yyyy p';

    return date ? format(new Date(date), fm) : '';
}

export function fTime(date, newFormat) {
    const fm = newFormat || 'HH : MM';

    return date ? getTime(new Date(date), fm) : '';
}

export function fTimestamp(date) {
    return date ? getTime(new Date(date)) : '';
}

export function fToNow(date) {
    return date
        ? formatDistanceToNow(new Date(date), {
            addSuffix: true,
        })
        : '';
}

export function formatedTimestamp(now) {
    if (now == null) {
        return ''
    }
    const date = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    return `${date} ${time}`
}

export function getFullDate(date) {
    if (!date) return '';
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

export function twelveHourFormat(time) {
    if (time == null) {
        return ''
    }

    time = time?.slice(0, 5)?.toString()?.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
        time = time.slice(1);
        time[5] = +time[0] < 12 ? 'AM' : 'PM';
        time[0] = +time[0] % 12 || 12;
    }
    return time.join('');

}

export function twelveHourFormatWithSpace(time) {
    const newTime = twelveHourFormat(time)
    return `${newTime.slice(0, -2)} ${newTime.slice(-2)}`;
}

export function convertTo24HourFormat(dateString) {
    if (dateString == null) {
        return '';
    }
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export function convertToDateString(timeString) {
    if (timeString == null) {
        return '';
    }
    const [hours, minutes, seconds] = timeString.split(':');
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date.toString();
}

export function AddOneDayToDate(dates) {
    if (dates == null) {
        return '';
    }
    const date = new Date(dates);
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

export function twelveHourTimeDiff(startTime, endTime) {
    if (startTime == null || endTime == null) {
        return '';
    }
    const startDate = new Date(`2023-03-24T${startTime}`);
    const endDate = new Date(`2023-03-24T${endTime}`);

    if (endDate < startDate) {
        endDate.setDate(endDate.getDate() + 1);
    }

    const diff = endDate - startDate;

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    return `${hours}:${minutes.toString().padStart(2, '0')}`;
}

export function getWeekDates() {

    const now = new Date();
    const dayOfWeek = now.getDay();
    const numDay = now.getDate();

    const start = new Date(now);
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);


    const end = new Date(now);
    end.setDate(numDay + (7 - dayOfWeek));
    end.setHours(0, 0, 0, 0);

    return [start, end];
}
