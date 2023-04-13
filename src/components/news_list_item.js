const NewsListItem = ({ item }) => {
  console.log(item);
  return (
    <>
      <div>
        <h1>{item.title}</h1>
        <p>{item.feed}</p>
      </div>
    </>
  );
};
export default NewsListItem;
