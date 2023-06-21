export const NameTeamRegex = (date: string): string => {
  const nameWithoutInitials = date.replace(
    /^(.{2} )?(.{2} )?(.*)( .{2})?$/gm,
    '$3',
  );
  const nameWithoutFinals = nameWithoutInitials.replace(/( \w{2})$/gm, '');

  return nameWithoutFinals;
};

export default NameTeamRegex;
