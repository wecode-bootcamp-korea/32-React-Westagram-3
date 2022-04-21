const LoginInput = ({ className, name, type, placeholder, onInput }) => {
  return (
    <input
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      onInput={onInput}
    />
  );
};

export default LoginInput;
