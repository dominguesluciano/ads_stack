const moment = require("moment-timezone");

schedules.create("daily_refresh", (schedule) => {
  schedule.tags(["daily"]);
  schedule.timezone("America/New_York");
  schedule.cron("0 2 * * *");
});