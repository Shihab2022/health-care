export type ISchedule = {
    id?: string;
    startDateTime: string;
    endDateTime: string;
    doctorId?: string,
    scheduleId?: string,
    schedule?: {
        startDate?: string
    }
};

export type IScheduleFrom = {
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
};