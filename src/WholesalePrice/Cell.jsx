import React, { Component } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Quantity from '../generic/Quantity';

const InputBlock = styled.div`
  display: flex;
`;

const Input = styled(InputMask)`
  width: 100%;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleInputChange = (e) => {
    const {
      handleChangeItemsCount, typeCode, groupName, setSummary, material,
    } = this.props;
    const { value, id, name } = e.target;
    this.setState({
      value,
    });

    handleChangeItemsCount(groupName, typeCode, Number(id), Number(value));
    setSummary(material, id, name * value);
  };

  handleAddQuantity = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecreaseQuantity = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  showQuantity = (id) => {
    const { setActiveCellId } = this.props;
    setActiveCellId(id);
  };

  render() {
    const { item, activeId } = this.props;
    const { value } = this.state;
    return (
      <td>
        {item.price}
        <InputBlock>
          <Input
            maskChar=""
            mask="9999"
            value={value}
            name={item.price}
            id={item.id}
            onChange={this.handleInputChange}
            onFocus={() => {
              this.showQuantity(item.id);
            }}
          />
          <Quantity
            quantity={value}
            id={item.id}
            hidden /* ={activeId !== item.id} */
            handleDecreaseQuantity={this.handleDecreaseQuantity}
            handleAddQuantity={this.handleAddQuantity}
          />
        </InputBlock>
      </td>
    );
  }
}
