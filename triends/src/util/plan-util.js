export function Plan(userId) {
  this.userId = userId;
  this.planInfo = {
    title: "",
    startDate: "2021-01-03",
    endDate: "2021-01-03",
  };
  this.memberInfo = [];
  this.courseInfo = [
    {
      dayInfo: 1,
      courses: [],
    },
  ];
}
