export interface Iattendance {
    emplname: string,
    date: string,
    inTime: string,
    outTime: string,
    isfullday?: boolean,
    id?: string
    workHours?: number
}