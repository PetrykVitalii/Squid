import React from 'react';
import styled from 'styled-components';

const MoneyIcon: React.FC = () => (
  <Wrap>
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 485.96 485.96"
      enableBackground="new 0 0 485.96 485.96"
      xmlSpace="preserve"
    >
      <g>
        <g id="Layer_8_4_">
          <path
            d="M272.979,346.838c3.863,4.607,5.812,11.217,5.812,19.787c0,20.946-9.521,32.602-28.575,34.998V335.45 C261.52,338.428,269.093,342.22,272.979,346.838z M420.773,312.818c0,119.541-79.598,173.142-177.795,173.142 c-98.198,0-177.792-53.601-177.792-173.142c0-98.772,78.104-179.539,134.339-207.186c-19.818,1.989-39.639,4.624-59.097,8.854 c-6.949,1.508-40.671,6.709-39.168,17.954c0.332,2.459-3.535,2.432-3.861,0c-1.335-9.973,15.836-14.651,22.61-16.726 c19.062-5.833,38.982-8.965,58.717-11.542c0.1-0.011,0.205-0.028,0.308-0.042c-8.047-0.098-16.099-0.58-24.022-1.6 c-7.268-0.947-18.277-2.373-21.459-10.159c-0.941-2.309,2.792-3.305,3.719-1.032c2.87,7.016,18.21,7.561,24.252,8.052 c7.486,0.61,14.971,0.84,22.481,0.846c6.663,0.005,13.426-0.588,20.2-1.536c-33.437-15.105-85.023-45.538-51.831-78.748 c47.146-47.142,36.053,1.98,63.783,17.626c27.731,15.649,108.15-73.095,88.735-20.406c-8.293,22.542-20.667,46.597-32.091,66.753 c1.839,0.499,3.571,1.376,5.108,2.777c4.253,3.844,7.054,8.43,4.112,13.847c-0.817,1.491-2.228,2.402-4.029,2.925 c5.8,0.151,10.758-0.936,12.93-4.23c0.662-1.009,2.134-1.335,3.043-0.388c7.551,7.975,1.392,12.742-6.835,14.837 C354.473,147.321,420.773,214.927,420.773,312.818z M272.51,106.94c2.778,1.188,5.57,2.433,8.359,3.732 c0.231-0.02,0.427-0.008,0.667-0.036c4.192-0.465,14.134-1.948,10.934-7.384C288.138,107.118,280.458,107.84,272.51,106.94z M264.311,98.499c2.026,0.395,4.05,0.717,6.107,0.854c2.125,0.145,4.979,0.547,7.004-0.292c1.839-5.806,0.065-9.519-5.309-11.138 c-0.503-0.124-0.972-0.187-1.455-0.263C268.491,91.435,266.357,95.071,264.311,98.499z M302.905,365.146 c0-13.854-3.673-24.799-11.01-32.837c-7.349-8.042-21.243-14.157-41.681-18.359v-62.222c14.835,2.053,22.93,10.758,24.252,26.096 h24.11c-2.879-27.703-19.003-42.681-48.362-44.905v-19.045h-13.23v19.045c-15.338,1.4-27.52,6.555-36.546,15.467 c-9.029,8.913-13.542,20.656-13.542,35.245c0,25.9,16.697,42.184,50.093,48.864v69.134c-18.14-3.043-28.123-14.873-29.934-35.492 h-23.993c2.309,32.482,20.281,50.584,53.927,54.288v18.934h13.236v-19.174c16.489-0.909,29.396-6.693,38.71-17.391 C298.242,392.135,302.905,379.577,302.905,365.146z M210.882,281.775c0,9.243,2.411,15.962,7.239,20.164 c4.818,4.214,11.112,7.312,18.863,9.275v-59.738C219.581,254.53,210.882,264.626,210.882,281.775z"
          />
        </g>
      </g>
    </svg>
  </Wrap>
);

const Wrap = styled.div`
  background-color: rgba(23, 172, 255, 1);
  border-radius: 50%;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MoneyIcon;
