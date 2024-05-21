export type ISchedule = {
    id?: string;
    startDate: string;
    endDate: string;
    doctorId?: string,
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