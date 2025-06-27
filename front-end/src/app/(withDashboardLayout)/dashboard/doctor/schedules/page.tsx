"use client";
import { Box, Button, IconButton } from "@mui/material";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { dateFormatter } from "@/utils/dateFormatter";
import { ISchedule } from "@/types/schedule";
import dayjs from "dayjs";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";

const DoctorSchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});
  const schedules = data?.doctorSchedules;
  const meta = data?.meta;

  const columns: GridColDef[] = [
    {
      field: "startDate",
      headerName: "Date",
      flex: 1,
      renderCell: ({ row }) => {
        return dateFormatter(row?.schedule?.startDateTime);
      },
    },
    {
      field: "startTime",
      headerName: "Start Time",
      flex: 1,
      renderCell: ({ row }) => {
        return dayjs(row?.schedule?.startDateTime).format("hh:mm a");
      },
    },
    {
      field: "endTime",
      headerName: "End Time",
      flex: 1,
      renderCell: ({ row }) => {
        return dayjs(row?.schedule?.endDateTime).format("hh:mm a");
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box sx={{ mb: 5 }}></Box>

      <Box>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid
              rows={schedules ?? []}
              columns={columns}
              getRowId={(row) => row?.scheduleId}
            />
          </Box>
        ) : (
          <h1>Loading.....</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulesPage;
