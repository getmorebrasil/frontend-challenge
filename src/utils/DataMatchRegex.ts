export const DataMatchRegex = (date: string): string => {
  const dateFinal = date.replace(
    /(^(\d{4})-(\d{2})-(\d{2}))T((\d{2}):(\d{2}):(\d{2}))Z$/gm,
    '$4/$3/$2 - $6:$7H',
  );

  const hourString = Number(dateFinal.slice(13, 15)) - 3;

  return dateFinal.replace(
    /^(\d{2}\/\d{2}\/\d{4} - )(\d{2}):(\d.{2})$/g,
    `$1${hourString}:$3`,
  );
};

export default DataMatchRegex;
