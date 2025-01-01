export interface IConfirmDialogComponent {
    isConfirmDialogPoppedUp(): Promise<boolean>;
    confirm(): Promise<void>;
    cancel(): Promise<void>;
}

export interface IDateTimePickerComponent {
    selectDate(date: string): Promise<void>;
    getSelectedDate(): Promise<string>;

    selectDateTime(dateTime: string): Promise<void>;
    getSelectedDateTime(): Promise<string>;

    selectTime(time: string): Promise<void>;
    getSelectedTime(): Promise<string>;

    getTimezone(): Promise<string>;
}

export interface IDropdownComponent {
    selectOption(option: unknown): Promise<void>;
    selectOptions(options: unknown[]): Promise<void>;
    getSelectedOption(): Promise<unknown>;
    getSelectedOptions(): Promise<unknown[]>;
}

export interface IToggleSwitchComponent {
    getSwitchState(): Promise<boolean>;
    setSwitchState(inputState: boolean): Promise<void>;
}