const format1 = (origin) => {
  const result = origin.data.result.result;
  const { id, name, email, password } = result[Object.keys(result)[0]];
  return {
    idMap: id,
    nameMap: name,
    emailMap: email,
    passwordMap: password,
  };
};

export { format1 };
