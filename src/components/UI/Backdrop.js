const Backdrop = (props) => {
  const className = `fixed top-0 left-0 z-10 h-screen w-full bg-backdrop ${props.className}`;
  return (
    <div onClick={props.onClick} className={className}>
      {props.children}
    </div>
  );
};

export default Backdrop;
