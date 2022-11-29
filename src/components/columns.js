export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id", //this is to map each colum to a specific value in the mock data
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date Of Birth",
    Footer: "Date Of Birth",
    accessor: "date_of_birth",
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
  //we can pick what data needs to be rendered in the UI (here we have excluded email and age)
];
