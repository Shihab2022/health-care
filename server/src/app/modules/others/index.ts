import { Request, Response } from "express";
import { appName } from "../../../constant";
import { AppointmentService } from "../Appointment/appointment.service";

export const testingRoute = (req: Request, res: Response) => {
  res.send({
    message: `Hi Guys, Welcome to ${appName} Server !`,
  });
};


export const cancelAppointments = () => {
  try {
    AppointmentService.cancelUnpaidAppointments();
  }
  catch (err) {
    console.error(err);
  }
}
