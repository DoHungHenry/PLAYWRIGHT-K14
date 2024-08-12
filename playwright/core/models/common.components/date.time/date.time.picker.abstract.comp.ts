import { BasePage } from "@core/models/base.page";
import { Locator } from "@playwright/test";

export type DateTimePickerCompChildClass<D extends DateTimePickerComp> = new (compLct: Locator) => D;

export abstract class DateTimePickerComp extends BasePage {

    constructor(public compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    abstract getSelectedDate(): Promise<unknown>;
    abstract getTimezone(): Promise<string>;

    abstract setDate(date: unknown): Promise<void>;

    abstract selectDateByName(dayName: DayNames, month?: Months, year?: string): Promise<void>;
    abstract selectDate(day: unknown, month?: unknown, year?: unknown): Promise<void>;
    abstract selectDateTime(day: unknown, month?: unknown, year?: unknown, hour?: unknown, minute?: unknown, AM?: unknown): Promise<void>;
};

export enum Months {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
};

export enum DayNames {
    Today = "Today",
    StartOfTMonth = "Start of month",
    EndOfTMonth = "End of month",
};