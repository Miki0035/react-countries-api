export const regions: region[] = [
  {
    name: "Africa",
    value: "Africa",
  },
  {
    name: "Americas",
    value: "Americas",
  },
  {
    name: "Asia",
    value: "Asia",
  },
  {
    name: "Europe",
    value: "Europe",
  },
  {
    name: "Oceania",
    value: "Oceania",
  },
  {
    name: "Polar",
    value: "Polar",
  },
  {
    name: "Clear Filter",
    value: "",
  },
];

type region = {
  name: string;
  value: string | null;
};
