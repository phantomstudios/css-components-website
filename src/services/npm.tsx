export const getPackageVersion = async (packageName: string) => {
  const apiUrl = `https://registry.npmjs.org/${packageName}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const version = data["dist-tags"]["latest"];
    return version;
  } catch (error) {
    console.error(`Error fetching version of ${packageName}:`, error);
    return null;
  }
};
