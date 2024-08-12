import { DateTime } from 'luxon';
import date from 'date-and-time';

export function monthNameToNumber(monthName: string): string {
    return DateTime.fromFormat(monthName, 'MMMM').toFormat('MM');
};

export function monthNumberToName(monthNumber: string): string {
    return DateTime.fromFormat(monthNumber, 'MM').toFormat('MMMM');
};


