export const mainEndpoints = [
  {
    value: "about-me",
    label: "about-me",
  },
  {
    value: "projects",
    label: "projects",
    subEndpoints : [
      {
        value: "all",
        label: "all",
      },
      {
        value: "coin-compute",
        label: "coin-compute",
      },
      {
        value: "miraki-store",
        label: "miraki-store",
      },
      {
        value: "off-campus",
        label: "off-campus",
      },
    ],
    name : 'project_name'
  },
  {
    value: "skills",
    label: "skills",
  },
 
]

export const subEndpoints = [
  {
    value: "all",
    label: "all",
  },
  {
    value: "coin-compute",
    label: "coin-compute",
  },
  {
    value: "miraki-store",
    label: "miraki-store",
  },
  {
    value: "off-campus",
    label: "off-campus",
  },
 
]
