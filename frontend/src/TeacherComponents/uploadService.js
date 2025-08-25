const STORAGE_KEY = 'uploads';

export const getUploads = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addUpload = (upload) => {
  const uploads = getUploads();
  uploads.push(upload);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(uploads));
};

export const deleteUpload = (id) => {
  const uploads = getUploads().filter(upload => upload.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(uploads));
};