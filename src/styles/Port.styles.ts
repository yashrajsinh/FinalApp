import styled from 'styled-components/native';

const C = {
  bg: '#05080f',
  card: '#0d1425',
  border: 'rgba(234,179,8,0.22)',
  yellow: '#EAB308',
  yellowDim: 'rgba(234,179,8,0.7)',
  text: '#e2e8f0',
  dim: '#94A3B8',
  track: 'rgba(148,163,184,0.12)',
};

export const Container = styled.View`
  flex: 1;
  background-color: ${C.bg};
`;

export const Content = styled.View`
  padding-bottom: 40px;
`;

/* ── HEADER ── */
export const HeaderWrap = styled.View`
  background-color: #000;
  padding: 28px 20px 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${C.yellow};
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 5px;
  color: ${C.yellow};
  text-transform: uppercase;
`;

export const HeaderSub = styled.Text`
  font-size: 10px;
  color: ${C.dim};
  letter-spacing: 1.5px;
  margin-top: 5px;
  text-align: center;
`;

/* ── STATUS BAR ── */
export const StatusRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 20px;
  background-color: #000;
  border-bottom-width: 1px;
  border-bottom-color: rgba(234, 179, 8, 0.12);
`;

export const StatusDot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${C.yellow};
  margin-right: 6px;
`;

export const StatusText = styled.Text`
  font-size: 10px;
  color: ${C.dim};
  letter-spacing: 1px;
`;

/* ── SECTION LABEL ── */
export const SectionLabel = styled.Text`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 3px;
  color: ${C.yellow};
  padding: 18px 20px 8px;
  text-transform: uppercase;
`;

/* ── HERO CARD ── */
export const HeroCard = styled.View`
  margin: 0 16px 16px;
  border-radius: 4px;
  overflow: hidden;
  border-width: 1px;
  border-color: ${C.border};
  background-color: ${C.card};
`;

export const HeroOverlay = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 16px 16px;
  background-color: rgba(5, 8, 15, 0.88);
`;

export const HeroBadge = styled.Text`
  font-size: 9px;
  letter-spacing: 2px;
  color: ${C.yellow};
  border-width: 1px;
  border-color: ${C.yellow};
  padding: 2px 8px;
  align-self: flex-start;
  margin-bottom: 6px;
`;

export const HeroName = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 1.5px;
`;

export const HeroDesc = styled.Text`
  font-size: 11px;
  color: ${C.dim};
  margin-top: 4px;
`;

/* ── STAT GRID ── */
export const StatGrid = styled.View`
  flex-direction: row;
  padding: 0 16px;
  gap: 8px;
`;

export const StatCard = styled.View`
  flex: 1;
  background-color: ${C.card};
  border-width: 1px;
  border-color: ${C.border};
  border-radius: 4px;
  padding: 12px 8px;
  align-items: center;
`;

export const StatIcon = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
`;

export const StatVal = styled.Text`
  font-size: 22px;
  font-weight: 900;
  color: ${C.yellow};
`;

export const StatLbl = styled.Text`
  font-size: 9px;
  color: ${C.dim};
  letter-spacing: 1px;
  margin-top: 2px;
`;

/* ── PROJECT CARDS ── */
export const Card = styled.View`
  margin: 0 16px 12px;
  background-color: ${C.card};
  border-width: 1px;
  border-color: ${C.border};
  border-radius: 4px;
  padding: 14px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Sub = styled.Text`
  font-size: 11px;
  color: ${C.dim};
  margin-top: 6px;
  line-height: 16px;
`;

export const ProjRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const ProjName = styled.Text`
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.5px;
  flex: 1;
  margin-right: 8px;
`;

export const StatusBadge = styled.View<{ status: string }>`
  padding: 3px 8px;
  border-radius: 2px;
  border-width: 1px;
  border-color: ${({ status }) =>
    status === 'deployed'
      ? 'rgba(74,222,128,0.4)'
      : status === 'experimental'
      ? 'rgba(249,115,22,0.4)'
      : status === 'production'
      ? 'rgba(234,179,8,0.4)'
      : 'rgba(220,38,38,0.4)'};
  background-color: ${({ status }) =>
    status === 'deployed'
      ? 'rgba(74,222,128,0.07)'
      : status === 'experimental'
      ? 'rgba(249,115,22,0.07)'
      : status === 'production'
      ? 'rgba(234,179,8,0.07)'
      : 'rgba(220,38,38,0.07)'};
`;

export const TagRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 8px;
`;

export const Tag = styled.View`
  background-color: rgba(234, 179, 8, 0.07);
  border-width: 1px;
  border-color: rgba(234, 179, 8, 0.18);
  padding: 2px 7px;
  border-radius: 2px;
`;

/* ── BARS ── */
export const BarRow = styled.View`
  margin-bottom: 12px;
`;

export const BarLabelRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const BarLabel = styled.Text`
  font-size: 10px;
  color: ${C.dim};
  letter-spacing: 1px;
`;

export const BarPct = styled.Text`
  font-size: 10px;
  color: ${C.yellow};
`;

export const BarTrack = styled.View`
  height: 5px;
  background-color: ${C.track};
  border-radius: 2px;
  overflow: hidden;
`;

export const BarFill = styled.View<{ w: string }>`
  height: 100%;
  width: ${({ w }) => w};
  background-color: ${C.yellow};
  border-radius: 2px;
`;

/* ── FOOTER ── */
export const Footer = styled.View`
  margin: 24px 20px 0;
  padding-top: 14px;
  border-top-width: 1px;
  border-top-color: ${C.border};
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterTxt = styled.Text`
  font-size: 9px;
  color: rgba(148, 163, 184, 0.35);
  letter-spacing: 1px;
`;
