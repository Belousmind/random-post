const showAlertMessage = (inputRef: React.RefObject<HTMLInputElement>) => {
  if (inputRef.current) {
    alert(inputRef.current.value);
  }
};

export default showAlertMessage;
