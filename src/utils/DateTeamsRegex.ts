export const DataMatchRegex = (date: string): string => {
  const dateFinal = date.replace(
    /^([\w\W]{2} )?([\w\W]{2} )?([\w\W ]*)( \w{2})?$/gm,
    `$4/$3/$2 - $6:$7H`,
  );

  return dateFinal;
};

export default DataMatchRegex;
