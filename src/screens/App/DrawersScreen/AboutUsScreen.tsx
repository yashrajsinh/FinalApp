import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import {
  Container,
  Content,
  Card,
  Title,
  Subtitle,
  Button,
  ButtonText,
  FooterText,
} from '@/styles/loginStyles';

/* 🧠 SYSTEM STAT TILE */
const StatTile = ({ label, value }: any) => (
  <View
    style={{
      flex: 1,
      padding: 10,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.06)',
      borderRadius: 10,
      marginRight: 10,
    }}
  >
    <Text style={{ color: '#9CA3AF', fontSize: 11 }}>{label}</Text>
    <Text style={{ color: '#E5E7EB', fontSize: 16, fontWeight: '700' }}>
      {value}
    </Text>
  </View>
);

const AboutUsScreen = () => {
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Content>
          {/* 🦇 SYSTEM HEADER (NOT A CARD ANYMORE) */}
          <View
            style={{
              padding: 18,
              borderWidth: 1,
              borderColor: 'rgba(234,179,8,0.2)',
              borderRadius: 16,
              marginBottom: 18,
            }}
          >
            <Title>ARKHAM NODE // ONLINE</Title>

            <Subtitle>
              gotham.kernel.boot = true{'\n'}
              surveillance.sync = active{'\n'}
              shadow.protocol = engaged
            </Subtitle>

            <FooterText>
              SYSTEM STATUS: STABLE • SIGNAL LOCKED • NIGHT MODE
            </FooterText>
          </View>

          {/* 📊 HUD GRID (THIS IS WHAT MAKES IT FEEL REAL) */}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 18,
            }}
          >
            <StatTile label="SYSTEMS" value="42" />
            <StatTile label="MODULES" value="08" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 18,
            }}
          >
            <StatTile label="SECURITY" value="MAX" />
            <StatTile label="LATENCY" value="<50ms" />
          </View>

          {/* 🧠 TERMINAL DIRECTIVE BLOCK */}
          <View
            style={{
              padding: 16,
              borderLeftWidth: 2,
              borderLeftColor: '#EAB308',
              marginBottom: 18,
            }}
          >
            <Title>DIRECTIVE_LOG</Title>

            <Subtitle>
              {'>'} init system: mobile infrastructure{'\n'}
              {'>'} mode: stealth architecture{'\n'}
              {'>'} priority: resilience + speed{'\n'}
              {'>'} status: running
            </Subtitle>
          </View>

          {/* ⚙️ RULESET PANEL */}
          <Card>
            <Title>CORE_PROTOCOL</Title>

            <Subtitle>
              [01] eliminate latency spikes{'\n'}
              [02] reduce UI overhead{'\n'}
              [03] enforce security-first flows{'\n'}
              [04] optimize interaction paths{'\n'}
              [05] suppress noise layers
            </Subtitle>
          </Card>

          {/* ⚡ ACTION STRIP (NOT A NORMAL CARD CTA) */}
          <View
            style={{
              marginTop: 22,
              padding: 16,
              borderWidth: 1,
              borderColor: 'rgba(234,179,8,0.3)',
              borderRadius: 16,
            }}
          >
            <Title>ACCESS GATEWAY</Title>

            <Subtitle>
              connecting to gotham secure layer will bind session to encrypted
              infrastructure.
            </Subtitle>

            <Button>
              <ButtonText>EXECUTE PROTOCOL</ButtonText>
            </Button>

            <FooterText>
              ALERT: all sessions are monitored in real-time
            </FooterText>
          </View>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default AboutUsScreen;
