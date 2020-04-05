import { employeeList } from "../utilities/data";

export const loadEmployees = () => {
  return {
    type: "LOAD_EMPLOYEES",
    payload: employeeList.user,
  };
};
