type Props = {
  buttonTextContent: string;
};
export function ButtonContainer({ buttonTextContent }: Props) {
  return (
    <div>
      <button>{buttonTextContent}</button>
    </div>
  );
}
