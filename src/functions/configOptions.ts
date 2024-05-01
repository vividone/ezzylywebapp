export const configOptions = (token: string) => {
  console.log(token, "");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
