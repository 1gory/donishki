import React, { Component } from 'react';
import styled from 'styled-components';
import GroupTable from './groupTable';

const Wrapper = styled.div`
  background-color: #f5f5f6;
  margin: 0 auto;
  max-width: 967px;

  & table,
  th,
  td {
    border: 1px solid black;
  }
`;

const Table = styled.table`
  margin-top: 30px;
  width: 100%;
  border-collapse: collapse;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  & td {
    width: 100px;
    padding: 0 10px;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCellId: null,
    };
  }

  setActiveCellId = (id) => {
    this.setState({
      activeCellId: id,
    });
  };

  getColumnCount = (data) => {
    const currentSize = data.map(group => group.sizes.length);
    return Math.max.apply(Math, currentSize);
  };

  render() {
    const { data, handleChangeItemsCount, setSummary } = this.props;
    const { activeCellId } = this.state;
    const columnCount = this.getColumnCount(data);
    const sizeCount = columnCount;
    return (
      <Wrapper>
        {data
          && data.map(group => (
            <Table>
              <tbody>
                <tr>
                  <td rowSpan="2">Наименование</td>
                  <td rowSpan="2">Артикул</td>
                  <td rowSpan="2">Фото</td>
                  <td colSpan={`${columnCount}`}>Размеры</td>
                  <td rowSpan="2">Итоговая сумма</td>
                </tr>

                <tr>
                  {group.sizes.map(size => (
                    <td>{size}</td>
                  ))}
                  {sizeCount && [...Array(sizeCount - group.sizes.length)].map(() => <td>-</td>)}
                </tr>
                <GroupTable
                  group={group}
                  handleChangeItemsCount={handleChangeItemsCount}
                  activeId={activeCellId}
                  setActiveCellId={this.setActiveCellId}
                  columnCount={columnCount}
                  setSummary={setSummary}
                />
              </tbody>
            </Table>
          ))}
      </Wrapper>
    );
  }
}
