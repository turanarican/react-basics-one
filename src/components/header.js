const Header = () => {
  function getFullYear() {
    return new Date().getFullYear();
  }
  return (
    <>
      <div>
        <h1>the date is {getFullYear()}</h1>
      </div>
    </>
  );
};

export default Header;
