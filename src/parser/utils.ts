export const setTabs = (defaultTabs: number, level: number) => {
  return "\t".repeat(defaultTabs + level);
};

export const camelToDelimiter = (name: string) => {
  return name
    .split("")
    .map((item) =>
      item === item.toLowerCase()
        ? item.toUpperCase()
        : `_${item.toUpperCase()}`
    )
    .join("");
};
