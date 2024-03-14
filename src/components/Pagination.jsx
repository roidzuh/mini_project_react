import Button from "./Button";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0 0.2rem;
  background-color: ${({ disabled }) => (disabled ? "#151515" : "transparent")};
  color: ${({ disabled }) => (disabled ? "#999" : "#505050")};
  border: none;
  border-radius: 0.2rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#151515" : "#f0f0f0")};
  }
`;

const Pagination = ({
  page,
  totalPages,
  onBack,
  onNext,
  numbers,
  onPageChange,
}) => {
  return (
    <div>
      <Button size="small" onClick={onBack} disabled={page === 1}>
        Back
      </Button>
      {numbers &&
        Array.from(Array(totalPages), (_, index) => index + 1).map((num) => (
          <StyledButton
            key={num}
            size="small"
            onClick={() => onPageChange(num)}
            disabled={num === page}
          >
            {num}
          </StyledButton>
        ))}
      <Button size="small" onClick={onNext} disabled={page === totalPages}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
