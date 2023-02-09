const Button = (props) => {
  const { name } = props;
  return <button className={name}>{name}</button>;
};

const element = (
  <div className="container">
    <h1>Social Buttons</h1>
    <div className="button_c">
      <Button name="like" />
      <Button name="comment" />
      <Button name="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
