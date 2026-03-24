import { NextResponse } from 'next/server';
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  renderToBuffer,
} from '@react-pdf/renderer';
import { resumeData } from '@/app/data/resume-data';

export const dynamic = 'force-dynamic';

/* Parse **bold** markers into React-PDF <Text> nodes */
function parseBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <Text key={i} style={{ fontFamily: 'Helvetica-Bold' }}>
        {part}
      </Text>
    ) : (
      part
    ),
  );
}

/* ── Styles ─────────────────────────────────────────────────────── */
const c = {
  black: '#000000',
  dark: '#1a1a1a',
  mid: '#333333',
  accent: '#0645AD',
};

const s = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 32,
    fontSize: 9,
    color: c.dark,
    lineHeight: 1.25,
  },

  /* Header */
  headerName: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    color: c.black,
    marginBottom: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 2,
    marginTop: 10,
  },
  headerItem: { fontSize: 8.5, color: c.mid },
  headerLink: { fontSize: 8.5, color: c.accent, textDecoration: 'none' },
  headerSep: { fontSize: 8.5, color: c.mid, marginHorizontal: 3 },
  headerRule: {
    borderBottomWidth: 0.5,
    borderBottomColor: c.mid,
    marginTop: 6,
    marginBottom: 2,
  },

  /* Summary */
  summary: { fontSize: 8.5, color: c.dark, lineHeight: 1.2, marginTop: 2 },

  /* Section */
  section: { marginTop: 7 },
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: c.black,
    borderBottomWidth: 0.8,
    borderBottomColor: c.black,
    paddingBottom: 2,
    marginBottom: 4,
  },

  /* Experience */
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  expCompany: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    color: c.black,
  },
  expMeta: { fontSize: 8.5, color: c.mid },
  expTitle: {
    fontFamily: 'Helvetica-Oblique',
    fontSize: 9,
    color: c.mid,
    marginBottom: 2,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 1,
    paddingRight: 4,
  },
  bulletDot: { width: 10, fontSize: 8.5, lineHeight: 1.2 },
  bulletText: { flex: 1, fontSize: 8.5, lineHeight: 1.2, color: c.dark },

  /* Education */
  eduRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eduInst: { fontFamily: 'Helvetica-Bold', fontSize: 9.5 },
  eduDegree: {
    fontFamily: 'Helvetica-Oblique',
    fontSize: 9,
    color: c.mid,
  },

  /* Skills */
  skillRow: { marginBottom: 1.5, flexDirection: 'row' as const },
  skillCat: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: c.dark,
    lineHeight: 1.2,
  },
  skillItems: { fontSize: 8.5, color: c.dark, lineHeight: 1.2, flex: 1 },

  /* Projects */
  projRow: { flexDirection: 'row', marginBottom: 1.5, paddingRight: 4 },
  projName: { fontFamily: 'Helvetica-Bold', fontSize: 8.5 },
  projDesc: { fontSize: 8.5, color: c.dark },

  /* Publications */
  pubTitle: { fontFamily: 'Helvetica-Oblique', fontSize: 8.5 },
  pubVenue: { fontSize: 8.5, color: c.mid },
});

/* ── Helpers ─────────────────────────────────────────────────────── */
const Sep = () => <Text style={s.headerSep}>|</Text>;

/* ── Document ────────────────────────────────────────────────────── */
const ResumeDocument = () => {
  const d = resumeData;
  return (
    <Document title={`${d.header.name} — Resume`} author={d.header.name}>
      <Page size="A4" style={s.page}>
        {/* ── Header ── */}
        <Text style={s.headerName}>{d.header.name}</Text>
        <View style={s.headerRow}>
          <Text style={s.headerItem}>{d.header.phone}</Text>
          <Sep />
          <Link src={`mailto:${d.header.email}`} style={s.headerLink}>
            {d.header.email}
          </Link>
          <Sep />
          <Link src={`https://${d.header.linkedin}`} style={s.headerLink}>
            LinkedIn
          </Link>
          <Sep />
          <Link src={`https://${d.header.github}`} style={s.headerLink}>
            GitHub
          </Link>
          <Sep />
          <Link src={`https://${d.header.portfolio}`} style={s.headerLink}>
            {d.header.portfolioDisplay}
          </Link>
        </View>

        {/* ── Summary ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Professional Summary</Text>
          <Text style={s.summary}>{parseBold(d.summary)}</Text>
        </View>

        {/* ── Experience ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Experience</Text>
          {d.experience.map((exp, i) => (
            <View
              key={i}
              style={{ marginBottom: i < d.experience.length - 1 ? 4 : 0 }}
            >
              <View style={s.expHeader}>
                <Text style={s.expCompany}>{exp.company}</Text>
                <Text style={s.expMeta}>{exp.period}</Text>
              </View>
              <View style={s.expHeader}>
                <Text style={s.expTitle}>{exp.title}</Text>
                <Text style={s.expMeta}>{exp.location}</Text>
              </View>
              {exp.bullets.map((b, j) => (
                <View key={j} style={s.bullet}>
                  <Text style={s.bulletDot}>{'\u2022'}</Text>
                  <Text style={s.bulletText}>{parseBold(b)}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* ── Education ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Education</Text>
          {d.education.map((edu, i) => (
            <View key={i}>
              <View style={s.eduRow}>
                <Text style={s.eduInst}>{edu.institution}</Text>
                <Text style={s.expMeta}>{edu.period}</Text>
              </View>
              <Text style={s.eduDegree}>{edu.degree}</Text>
            </View>
          ))}
        </View>

        {/* ── Skills ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Technical Skills</Text>
          {d.skills.map((sk, i) => (
            <View key={i} style={s.skillRow}>
              <Text style={s.skillCat}>{sk.category}: </Text>
              <Text style={s.skillItems}>{sk.items}</Text>
            </View>
          ))}
        </View>

        {/* ── Projects ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Projects</Text>
          {d.projects.map((p, i) => (
            <View key={i} style={s.projRow}>
              <Text style={s.projName}>{p.name}: </Text>
              <Text style={s.projDesc}>{p.description}</Text>
            </View>
          ))}
        </View>

        {/* ── Awards ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Awards & Publications</Text>
          {d.awards.map((a, i) => (
            <View key={i} style={s.bullet}>
              <Text style={s.bulletDot}>{'\u2022'}</Text>
              <Text style={s.bulletText}>
                {a.text}
                {a.link ? '  -  ' : ''}
              </Text>
              {a.link && (
                <Link
                  src={a.link}
                  style={{
                    fontSize: 8.5,
                    color: c.accent,
                    textDecoration: 'none',
                    paddingLeft: 2,
                  }}
                >
                  View
                </Link>
              )}
            </View>
          ))}
          {d.publications.map((p, i) => (
            <View key={i} style={s.bullet}>
              <Text style={s.bulletDot}>{'\u2022'}</Text>
              <Text style={s.bulletText}>
                {`"${p.title}" — ${p.venue}, ${p.year}`}
                {p.link ? '  -  ' : ''}
              </Text>
              {p.link && (
                <Link
                  src={p.link}
                  style={{
                    fontSize: 8.5,
                    color: c.accent,
                    textDecoration: 'none',
                    paddingLeft: 2,
                  }}
                >
                  View
                </Link>
              )}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

/* ── API Route ───────────────────────────────────────────────────── */
export async function GET() {
  try {
    const buffer = await renderToBuffer(<ResumeDocument />);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Subham_Saha_Resume.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate resume PDF' },
      { status: 500 },
    );
  }
}
