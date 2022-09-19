const format1 = (filterId, origin) => {
  const result = origin.data.result.result[filterId];
  const { id, name, email, password } = result;
  return {
    idMap: id,
    nameMap: name,
    emailMap: email,
    passwordMap: password,
  };
};

export { format1 };
