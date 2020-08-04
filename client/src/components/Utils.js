import styled from 'styled-components/macro';

// Reusable styled-components
export const StandardLabel = styled.label`
  display: block;
  margin: 0 0 0.2rem;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  color: #555;
`;

export const StandardInput = styled.input`
  padding: 0.25rem;
  border: none;
  border-radius: 4px;
  margin: 0 0 1.25rem;
  width: 100%;
  box-shadow: 0px 0px 2px 0px rgba( 0, 0, 0, 0.3);
`;

export const StandardTextarea = styled.textarea`
  padding: 0.25rem;
  border: none;
  border-radius: 4px;
  margin: 0 0 1.25rem;
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 2px 0px rgba( 0, 0, 0, 0.3);
`;

export const StandardSubmitButton = styled.input`
  background-color: #216ba5;
  border: none;
  padding: 0.5rem;
  text-transform: uppercase;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
`;
