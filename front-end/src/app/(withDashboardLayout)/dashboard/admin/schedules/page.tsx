"use client";
import { Box, Button, IconButton, Pagination, Stack } from "@mui/material";
import ScheduleModal from "./components/ScheduleModal";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  useDeleteScheduleMutation,
  useGetAllSchedulesQuery,
} from "@/redux/api/scheduleApi";
import dayjs from "dayjs";
import { ISchedule } from "@/types/schedule";
import {
  dateFormatterForTable,
} from "@/utils/dateFormatter";
import { toast } from "sonner";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const query: Record<string, any> = {};
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);

  query["page"] = page;
  query["limit"] = limit;
  const { data, isLoading } = useGetAllSchedulesQuery({ ...query });

  const [deleteSchedule, { isLoading: isDeleteLoading, isError, isSuccess }] =
    useDeleteScheduleMutation();
  const schedules = data?.schedules?.data;
  const meta = data?.schedules?.meta;
  useEffect(() => {
    if (schedules?.length) {
      setPage(meta?.page || 1);
    }
  }, [schedules, isLoading]);
  const handleDelete = async (row: ISchedule) => {
    try {
      await deleteSchedule(row?.id).unwrap();
      toast.success("Schedule deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete schedule.");
    }
  };
  const columns: GridColDef[] = [
    {
      field: "startDate",
      headerName: "Start Date",
      renderCell: ({ row }) => {
        return dateFormatterForTable(row?.startDateTime);
      },
      flex: 1,
    },
    {
      field: "endDate",
      headerName: "End Date",
      renderCell: ({ row }) => {
        return dateFormatterForTable(row?.endDateTime);
      },
      flex: 1,
    },
    {
      field: "startTime",
      headerName: "Start Time",
      renderCell: ({ row }) => {
        return dayjs(row?.startDateTime).format("h:mm A");
      },
      flex: 1,
    },
    {
      field: "endTime",
      headerName: "End Time",
      renderCell: ({ row }) => {
        return dayjs(row?.endDateTime).format("h:mm A");
      },
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="delete">
              <DeleteIcon
                onClick={() => handleDelete(row)}
                sx={{ color: "red" }}
              />
            </IconButton>
            <IconButton aria-label="delete">
              <EditIcon sx={{}} />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      {!isLoading || !isDeleteLoading ? (
        <Box my={2}>
          <DataGrid rows={schedules ?? []} columns={columns} />

          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Pagination
              count={Math.ceil((meta?.total || 0) / meta?.limit || 1)}
              page={page || 1}
              onChange={(event, value) => setPage(value)}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default SchedulesPage;
