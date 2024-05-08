export const successReponse = (data, message) => {
  return {
    data,
    meta: { message },
  };
};

export const failedResponse = (code, message) => {
  return {
    code,
    meta: { message },
  };
};
