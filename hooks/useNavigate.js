const useNavigate = (navigation) => {
  const onNavigate = (path) => {
    navigation.navigate(path);
  };
  return { onNavigate };
};

export default useNavigate;
