import React from "react";

import styled from "styled-components";

import { Text, Grid } from "./index";

interface IInput<T> {
  inlineStyles?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  multiLine?: boolean;
  rows?: number;
  onSubmit?: React.FormEventHandler<T>;
  onChange?: React.ChangeEventHandler<T>;
}

const Input = ({
  inlineStyles,
  type,
  placeholder,
  value,
  label,
  multiLine,
  onSubmit,
  onChange,
}: IInput<HTMLTextAreaElement | HTMLInputElement>) => {
  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          inlineStyles={inlineStyles}
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <ElInput
        inlineStyles={inlineStyles}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </React.Fragment>
  );
};

const ElInput = styled.input<IInput<HTMLInputElement>>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
  border: 1px solid #212121;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElTextarea = styled.textarea<IInput<HTMLTextAreaElement>>`
  ${(props) => (props.inlineStyles ? `${props.inlineStyles};` : "")};
  border: 1px solid #212121;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
