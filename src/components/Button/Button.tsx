const Button = ({text, style, onClick}) => {

  return (
    <button style={{
      padding: '12px',
      margin: '12px',
      fontSize: '19px',
      fontWeight: 'bold',
      ...style
    }}
            onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
