export function Plan(userId) {
  this.userId = userId;
  this.planInfo = {
    title: "",
    startDate: "",
    endDate: "",
    courseInfo: [
      {
        day: 1,
        courses: [],
      },
    ],
  };
}
