import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Box)`
  width: 1920px;
  height: 1080px;
  background: #3669c4;
  display: flex;
  position: relative;
`;

export const BodyContainer = styled(Box)`
  width: calc(1920px - 320px);
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

export const UploadContainer = styled(Box)`
  width: 1520px;
  height: 920px;
  background: #fff;
  box-shadow: 0 5px 5px 0 #0003;
  border-radius: 7px;
  margin-top: 40px;
  margin-left: 40px;
`;
