import React, { createContext, useContext, useState } from "react";

interface JobContextData {
  roleListSelected: Array<number>;
  changeRoleListSelected: (id: number) => void;
}

interface Props {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextData>({} as JobContextData);

export const JobProvider: React.FC<Props> = ({ children }) => {
  const [roleListSelected, setRoleListSelected] = useState<number[]>([]);

  function changeRoleListSelected(id: number) {
    const newRole = !!!roleListSelected.find((item) => item == id);
    if (newRole) {
      setRoleListSelected((prevState) => [...prevState, id]);
    } else {
      const removeRole = roleListSelected.filter((item) => item != id);
      setRoleListSelected(removeRole);
    }
  }

  return (
    <JobContext.Provider value={{ roleListSelected, changeRoleListSelected }}>
      {children}
    </JobContext.Provider>
  );
};

export function useJob() {
  const context = useContext(JobContext);
  return context;
}
