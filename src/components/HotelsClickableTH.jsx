import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const HotelsTable = ({ hotels, sortKey, onSort }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <th onClick={() => onSort('price')} className="hotel-price-column">
          値段{sortKey === 'price' ? ' ▲' : ''}
        </th>
        <th onClick={() => onSort('reviewAverage')} className="hotel-reviewAverage-column">
          レビュー{sortKey === 'reviewAverage' ? ' ▲' : ''}
        </th>
        <th className="hotel-reviewCount-column">レビュー件数</th>
        <th>距離</th>
      </tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};

HotelsTable.defaultProps = {
  hotels: [],
};


export default HotelsTable;
