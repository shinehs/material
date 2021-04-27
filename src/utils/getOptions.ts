export default async function (entries: any[]) {
  const conditionResults = await Promise.all(
    entries.map(async ({ condition }) => {
      if (condition) {
        const result = await condition();
        return result;
      } else {
        return true;
      }
    }),
  );

  return entries.filter((v, index) => conditionResults[index]);
}
