import styled from 'styled-components';

export const UploaderContainer = styled.div`
  background-color: ${(props) => props.theme.dropzoneBgColor};
  border: 5px dashed ${(props) => props.theme.dropzoneBorderColor};
  color: ${(props) => props.theme.dropzoneColor};
  padding: 15px;
  max-width: 600px;

  div {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;

    p {
      font-size: 18px;
      font-family: sans-serif;
      max-width: 70%;
      text-align: center;
    }
  }
`;
