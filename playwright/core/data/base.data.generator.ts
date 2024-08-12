import { randTextRange, randNumber, randCompanyName, randMac, randFullName, randFirstName, randLastName, randEmail } from '@ngneat/falso';
import { v4 } from 'uuid';
import date from 'date-and-time';

export class BaseDataGenerator {

    // generate number
    static rUnitBuyPrice = () => randNumber({ min: 100, max: 999 });

    static rUnitBuyPrice_5fraction = () => randNumber({ min: 100, max: 999, fraction: 5 });

    static rUnitSellPrice = () => randNumber({ min: 1000, max: 2000 });

    static rUnitSellPrice_5fraction = () => randNumber({ min: 1000, max: 2000, fraction: 5 });

    static rUnitPrice_5fraction = () => randNumber({ min: 10, max: 99, fraction: 5 });

    static rStandardCost = () => randNumber({ min: 100, max: 999 });

    static rStandardCost_5fraction = () => randNumber({ min: 100, max: 999, fraction: 5 });

    static rTradePrice = () => randNumber({ min: 100, max: 999 });

    static rTradePrice_5fraction = () => randNumber({ min: 100, max: 999, fraction: 5 });

    static rRetailPrice = () => randNumber({ min: 100, max: 999 });

    static rRetailPrice_5fraction = () => randNumber({ min: 110, max: 111, fraction: 5 });

    static rNum1_9 = () => randNumber({ min: 1, max: 9 });

    static rNum10_99 = () => randNumber({ min: 10, max: 99 });

    static rNum100_999 = () => randNumber({ min: 100, max: 999 });

    static rNum1000_9999 = () => randNumber({ min: 1000, max: 9990 });

    // generate string
    static uuidv4 = () => String(v4());

    static rString10_30chars = () => randTextRange({ min: 10, max: 30 });

    static rString31_100chars = () => randTextRange({ min: 31, max: 100 });

    static rString101_300chars = () => randTextRange({ min: 101, max: 300 });

    static rString301_999chars = () => randTextRange({ min: 301, max: 999 });

    static rManufacturer = () => randCompanyName();

    static rMacAddress = () => randMac();

    static rFullName = () => randFullName();

    static rFirstName = () => randFirstName();

    static rLastName = () => randLastName();

    static rEmail = () => randEmail({ provider: 'gmail', suffix: 'com' });

    static rPhone = () => (randNumber({ min: 1000000000, max: 9999999999 })).toString();

    // date and time
    static currentYyyy = () => date.format(new Date(), 'YYYY');
    static currentYyyyMm = () => date.format(new Date(), 'YYYY/MM');
    static currentYyyyMmDd = () => date.format(new Date(), 'YYYY/MM/DD');
    static currentYyyyMmDdHh = () => date.format(new Date(), 'YYYY/MM/DD/HH');
    static currentYyyyMmDdHhMm = () => date.format(new Date(), 'YYYY/MM/DD/HH:mm');
    static currentYyyyMmDdhhmmA = () => date.format(new Date(), 'YYYY/MM/DD hh:mm A');
    static currentYyyyMmDdHhMmSsA = () => date.format(new Date(), 'YYYY/MM/DD/hh:mm:ss A');
    static currentMmYyyy = () => date.format(new Date(), 'MM/YYYY');
    static currentDdMmYyyy = () => date.format(new Date(), 'DD/MM/YYYY');
    static currentDdMmYyyyHhA = () => date.format(new Date(), 'DD/MM/YYYY hh A');
    static currentDdMmYyyyHhMmA = () => date.format(new Date(), 'DD/MM/YYYY hh:mm A');
    static currentDdMmYyyyHhMmSsA = () => date.format(new Date(), 'DD/MM/YYYY hh:mm:ss A');
}


