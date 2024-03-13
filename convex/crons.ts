import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

crons.interval(
  "clear inactive user every minute",
  { minutes: 5 },
  api.mutations.users.deleteInActiveUsers
);

export default crons;
