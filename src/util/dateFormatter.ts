const formatDate = (date: string): string => {
  return date.split(".")[0].replace("T", " ");
};

export { formatDate };
