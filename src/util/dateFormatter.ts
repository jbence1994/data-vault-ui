const formatDate = (date: string) => {
  return date.split(".")[0].replace("T", " ");
};

export { formatDate };
