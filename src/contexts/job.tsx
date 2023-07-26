import React, { createContext, useContext, useState } from "react";
import JobList from "../constants/JobList";

interface JobListData {
  id: number;
  title: string;
  experience: string;
  salary: string;
  companyName: string;
  location: string;
  icon: string;
  role: number;
}

interface JobContextData {
  roleListSelected: Array<number>;
  changeRoleListSelected: (id: number) => void;
  jobList: Array<JobListData>;
  filterJobByRole: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextData>({} as JobContextData);

export const JobProvider: React.FC<Props> = ({ children }) => {
  const [roleListSelected, setRoleListSelected] = useState<number[]>([]);
  const [jobList, setJobList] = useState<JobListData[]>(JobList);
  const [jobListOriginal, _] = useState<JobListData[]>(JobList);

  function changeRoleListSelected(id: number) {
    const newRole = !!!roleListSelected.find((item) => item == id);
    if (newRole) {
      setRoleListSelected((prevState) => [...prevState, id]);
    } else {
      const removeRole = roleListSelected.filter((item) => item != id);
      setRoleListSelected(removeRole);
    }
  }

  function filterJobByRole() {
    const selectedRoles = [...jobListOriginal];
    const filteredList = selectedRoles.filter((item) =>
      roleListSelected.includes(item.role)
    );

    if (roleListSelected.length > 0) {
      setJobList(filteredList);
    } else {
      setJobList(JobList);
    }
  }

  return (
    <JobContext.Provider
      value={{
        roleListSelected,
        changeRoleListSelected,
        jobList,
        filterJobByRole,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export function useJob() {
  const context = useContext(JobContext);
  return context;
}
