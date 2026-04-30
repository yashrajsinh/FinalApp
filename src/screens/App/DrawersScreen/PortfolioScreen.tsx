import React from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import {
  Container,
  Content,
  HeroCard,
  HeroOverlay,
  HeroBadge,
  HeroName,
  HeroDesc,
  SectionLabel,
  Card,
  Title,
  Sub,
  StatusRow,
  StatusDot,
  StatusText,
  ProjRow,
  ProjName,
  StatusBadge,
  Tag,
  TagRow,
  StatGrid,
  StatCard,
  StatVal,
  StatLbl,
  StatIcon,
  BarRow,
  BarLabelRow,
  BarLabel,
  BarPct,
  BarTrack,
  BarFill,
  Footer,
  FooterTxt,
  HeaderWrap,
  HeaderTitle,
  HeaderSub,
} from '@/styles/Port.styles';

const PortfolioScreen = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Content>
          {/* ── HEADER ── */}
          <HeaderWrap>
            <View style={{ alignItems: 'center', marginBottom: 12 }}>
              {/* Bat Logo SVG via emoji fallback — swap for react-native-svg if you have it */}
              <Text style={{ fontSize: 40 }}>🦇</Text>
            </View>
            <HeaderTitle>BRUCE WAYNE</HeaderTitle>
            <HeaderSub>
              // CLASSIFIED · VIGILANTE SYSTEMS ARCHITECT · GOTHAM
            </HeaderSub>
          </HeaderWrap>

          {/* ── STATUS BAR ── */}
          <StatusRow>
            <StatusDot />
            <StatusText style={{ color: '#EAB308' }}>ONLINE</StatusText>
            <StatusText> | BATCOMPUTER v4.2 | CLEARANCE: ████</StatusText>
          </StatusRow>

          {/* ── AGENT HERO CARD ── */}
          <SectionLabel>AGENT PROFILE</SectionLabel>
          <HeroCard>
            <Image
              source={{
                uri: 'https://cdn.britannica.com/78/253178-050-7F4A01C5/Publicity-still-showing-Christian-Bale-in-The-Dark-Knight-Batman-movie.jpg',
              }}
              style={{ width: '100%', height: 180 }}
              resizeMode="cover"
            />
            <HeroOverlay>
              <HeroBadge>CASE FILE #0001</HeroBadge>
              <HeroName>THE DARK KNIGHT</HeroName>
              <HeroDesc>
                Billionaire. Vigilante. Systems Architect. Protector of Gotham.
              </HeroDesc>
            </HeroOverlay>
          </HeroCard>

          {/* ── POWER STATS ── */}
          <SectionLabel>POWER INDEX</SectionLabel>
          <StatGrid>
            <StatCard>
              <StatIcon>🦇</StatIcon>
              <StatVal>99</StatVal>
              <StatLbl>Combat</StatLbl>
            </StatCard>
            <StatCard>
              <StatIcon>🧠</StatIcon>
              <StatVal>98</StatVal>
              <StatLbl>Intellect</StatLbl>
            </StatCard>
            <StatCard>
              <StatIcon>⚡</StatIcon>
              <StatVal>94</StatVal>
              <StatLbl>Speed</StatLbl>
            </StatCard>
          </StatGrid>

          {/* ── CASE FILES / PROJECTS ── */}
          <SectionLabel>CASE FILES</SectionLabel>

          <Card>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03fyuqY-swNIDza8DitBAwHc7Lmt3A9JPPg&s',
              }}
              style={{
                width: '100%',
                height: 140,
                borderRadius: 4,
                marginBottom: 10,
              }}
              resizeMode="cover"
            />
            <ProjRow>
              <ProjName>ARKHAM UI SYSTEM</ProjName>
              <StatusBadge status="deployed">
                <Text
                  style={{ fontSize: 9, color: '#4ade80', letterSpacing: 1 }}
                >
                  DEPLOYED
                </Text>
              </StatusBadge>
            </ProjRow>
            <Sub>
              Dark UI framework inspired by Gotham surveillance systems.
              Multi-layer threat detection interface.
            </Sub>
            <TagRow>
              <Tag>
                <Text style={{ fontSize: 9, color: 'rgba(234,179,8,0.8)' }}>
                  REACT
                </Text>
              </Tag>
              <Tag>
                <Text style={{ fontSize: 9, color: 'rgba(234,179,8,0.8)' }}>
                  DARK MODE
                </Text>
              </Tag>
              <Tag>
                <Text style={{ fontSize: 9, color: 'rgba(234,179,8,0.8)' }}>
                  REAL-TIME
                </Text>
              </Tag>
            </TagRow>
          </Card>

          <Card>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={{
                width: '100%',
                height: 140,
                borderRadius: 4,
                marginBottom: 10,
              }}
              resizeMode="cover"
            />
            <ProjRow>
              <ProjName>JOKER EXPERIMENT</ProjName>
              <StatusBadge status="experimental">
                <Text
                  style={{ fontSize: 9, color: '#f97316', letterSpacing: 1 }}
                >
                  EXPERIMENTAL
                </Text>
              </StatusBadge>
            </ProjRow>
            <Sub>
              Chaotic UI concept exploring glitch interactions and
              unpredictability. Entropy-driven layout engine.
            </Sub>
            <TagRow>
              <Tag>
                <Text style={{ fontSize: 9, color: 'rgba(234,179,8,0.8)' }}>
                  GLITCH
                </Text>
              </Tag>
              <Tag>
                <Text style={{ fontSize: 9, color: 'rgba(234,179,8,0.8)' }}>
                  CHAOS
                </Text>
              </Tag>
              <Tag>
                <Text style={{ fontSize: 9, color: 'rgba(234,179,8,0.8)' }}>
                  ANIMATION
                </Text>
              </Tag>
            </TagRow>
          </Card>

          <Card>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/46/8f/37/468f3709771603eb767b7d838417ce0c.jpg',
              }}
              style={{
                width: '100%',
                height: 140,
                borderRadius: 4,
                marginBottom: 10,
              }}
              resizeMode="cover"
            />
            <ProjRow>
              <ProjName>WAYNETECH DASHBOARD</ProjName>
              <StatusBadge status="production">
                <Text
                  style={{ fontSize: 9, color: '#EAB308', letterSpacing: 1 }}
                >
                  PRODUCTION
                </Text>
              </StatusBadge>
            </ProjRow>
            <Sub>
              Corporate-grade analytics system for real-time monitoring of
              Gotham infrastructure.
            </Sub>
            <TagRow>
              <Tag>
                <Text style={{ fontSize: 9, color: 'rgba(234,179,8,0.8)' }}>
                  ANALYTICS
                </Text>
              </Tag>
              <Tag>
                <Text style={{ fontSize: 9, color: 'rgba(234,179,8,0.8)' }}>
                  DASHBOARD
                </Text>
              </Tag>
              <Tag>
                <Text style={{ fontSize: 9, color: 'rgba(234,179,8,0.8)' }}>
                  ENTERPRISE
                </Text>
              </Tag>
            </TagRow>
          </Card>

          {/* ── SKILLS ── */}
          <SectionLabel>SKILLS MANIFEST</SectionLabel>
          <Card>
            {[
              { label: 'React Native', pct: '95%', val: 95 },
              { label: 'System Design', pct: '90%', val: 90 },
              { label: 'UI/UX Engineering', pct: '88%', val: 88 },
              { label: 'Stealth Ops / DevOps', pct: '82%', val: 82 },
              { label: 'Batcomputer AI', pct: '78%', val: 78 },
            ].map(s => (
              <BarRow key={s.label}>
                <BarLabelRow>
                  <BarLabel>{s.label}</BarLabel>
                  <BarPct>{s.pct}</BarPct>
                </BarLabelRow>
                <BarTrack>
                  <BarFill w={s.pct} />
                </BarTrack>
              </BarRow>
            ))}
          </Card>

          {/* ── IMPACT OVERVIEW ── */}
          <SectionLabel>IMPACT OVERVIEW</SectionLabel>
          <Card>
            {[
              { label: 'Deployments', pct: '80%', val: 80 },
              { label: 'Experiments', pct: '60%', val: 60 },
              { label: 'Stability', pct: '92%', val: 92 },
            ].map(s => (
              <BarRow key={s.label}>
                <BarLabelRow>
                  <BarLabel>{s.label}</BarLabel>
                  <BarPct>{s.pct}</BarPct>
                </BarLabelRow>
                <BarTrack>
                  <BarFill w={s.pct} />
                </BarTrack>
              </BarRow>
            ))}
          </Card>

          {/* ── FOOTER ── */}
          <Footer>
            <FooterTxt>WAYNE INDUSTRIES © 2024</FooterTxt>
            <FooterTxt style={{ color: 'rgba(234,179,8,0.3)' }}>
              BUILD: 0.0.7
            </FooterTxt>
          </Footer>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default PortfolioScreen;
