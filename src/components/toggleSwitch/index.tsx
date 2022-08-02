import styled from "@emotion/styled";

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch = ({ isOn, handleToggle }: ToggleSwitchProps) => {
  return (
    <Toggle>
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span />
    </Toggle>
  );
};

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.5s;
    border-radius: 34px;
  }

  & span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.5s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #2196f3;
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;

export default ToggleSwitch;
