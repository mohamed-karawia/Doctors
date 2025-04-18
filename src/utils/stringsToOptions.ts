const stringsToOptions = (arr: string[]) => {
  return arr.map((string) => ({
    label: string,
    value: string,
  }));
};

export default stringsToOptions;
