/**
 * Button component
 * @prop {JSX.Element} children the content written inside button component
 * @prop {Object} onClick the function to show and close the form to add friend
 * @returns {JSX.Element}
 */
export default function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
