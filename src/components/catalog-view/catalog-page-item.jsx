import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {MdNavigateNext} from 'react-icons/md';
import * as SharedStyle from '../../styles/shared-style';
import ReactPlannerContext from '../../utils/react-planner-context';

const STYLE_BOX = {
  width: '14em',
  height: '14em',
  padding: '0.625em',
  background: '#f7f7f9',
  border: '1px solid #e1e1e8',
  cursor: 'pointer',
  position: 'relative',
  boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.11), 0 1px 4px 0 rgba(0, 0, 0, 0.11)',
  borderRadius: '2px',
  transition: 'all .2s ease-in-out',
  WebkitTransition: 'all .2s ease-in-out',
  alignSelf: 'center',
  justifySelf: 'center',
};

const STYLE_BOX_HOVER = {
  ...STYLE_BOX,
  background: SharedStyle.SECONDARY_COLOR.main
};

const STYLE_TITLE = {
  width: '100%',
  position: 'absolute',
  textAlign: 'center',
  display: 'block',
  marginBottom: '.5em',
  padding:'1em',
  textTransform: 'capitalize',
  WebkitTransition: 'all .15s ease-in-out'
};

const STYLE_TITLE_HOVERED = {
  ...STYLE_TITLE,
  fontSize: '1.4em',
  transform: 'translateY(-60px)',
  color:'rgb(28, 166, 252)',
  marginTop:'0.5em'
};

const STYLE_NEXT_HOVER = {
  position: 'absolute',
  color: SharedStyle.SECONDARY_COLOR.main,
  fontSize: '5em',
  width: '100%',
};

const CONTAINER_DIV = {
  background: SharedStyle.COLORS.white,
  marginBottom: '5px',
  border: 'solid 1px #EEE',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const CatalogPageItem = ({ page, oldPage }) => {
  const [hover, setHover] = useState(false);
  const { projectActions } = useContext(ReactPlannerContext);

  const changePage = (newPage) => {
    projectActions.changeCatalogPage(newPage, oldPage.name)
  }

  return (
    <div
      style={hover ? STYLE_BOX_HOVER : STYLE_BOX}
      onClick={() => changePage(page.name)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ?
        <div style={CONTAINER_DIV}>
          <b style={STYLE_TITLE_HOVERED}>{page.label}</b>
          <MdNavigateNext style={STYLE_NEXT_HOVER}/>
        </div>
        :
        <div style={CONTAINER_DIV}>
          <b style={STYLE_TITLE}>{page.label}</b>
        </div>}

    </div>
  );
}

CatalogPageItem.propTypes = {
  page: PropTypes.object.isRequired,
  oldPage: PropTypes.object.isRequired,
};

export default CatalogPageItem;