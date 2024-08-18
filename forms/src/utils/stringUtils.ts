export const fieldName = (id: string): string => {
  const idString = id.toString();
  return idString[0].toUpperCase() + idString.slice(1);
};

export const getBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

export const formatPhoto = async (file: File | string): Promise<string> => {
  if (typeof file !== 'string' && file) {
    try {
      const base64 = await getBase64(file);
      return base64 as string;
    } catch (err) {
      console.log(`Error during converting phot: ${err}`);
      return '';
    }
  }
  return '';
};
