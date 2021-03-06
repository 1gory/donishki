import React, { Component } from 'react';
import styled from 'styled-components';
import TypeRow from './TypeRow';
import noPhotoIcon from '../icons/no-photo.svg';

const Image = styled.img`
  // width: 50px;
  max-height: 70px;
  max-width: 70px;
`;

const Tr = styled.tr`
  &: hover {
    background-color: #dbdbdd;
  }
`;

const Td = styled.td`
  font-size: 14px;
`;

export default class extends Component {
  render() {
    const {
      group,
      handleChangeItemsCount,
      activeId,
      setActiveCellId,
      columnCount,
      setSummary,
    } = this.props;
    return group.types.map(type => (
      <Tr>
        <Td>{type.name}</Td>
        <Td>{`Арт.${type.typeCode}`}</Td>
        <td>
          <Image src={type.image || noPhotoIcon} />
        </td>
        <TypeRow
          groupName={group.groupName}
          sizes={group.sizes}
          items={type.items}
          typeCode={type.typeCode}
          handleChangeItemsCount={handleChangeItemsCount}
          activeId={activeId}
          setActiveCellId={setActiveCellId}
          columnCount={columnCount}
          setSummary={setSummary}
          material={group.material}
        />
      </Tr>
    ));
  }
}
