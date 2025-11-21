import { Column, Heading, Meta, Schema, Text, Button, Row, Card, Icon, Line } from "@once-ui-system/core";
import { baseURL, about, person, work, certifications } from "@/resources";
import { Projects } from "@/components/work/Projects";
import Link from "next/link";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      
      <Projects />
      
      <Card background="brand-alpha-weak" border="brand-alpha-medium" radius="m" padding="m" marginBottom="40" marginTop="40" maxWidth="s" style={{ margin: "40px auto 0" }}>
        <Column gap="m" fillWidth horizontal="center">
          <Row vertical="center" gap="s" horizontal="center">
            <Icon name="award" onBackground="brand-strong" size="m" />
            <Heading variant="heading-strong-m">{certifications.label}</Heading>
          </Row>
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">
            {certifications.description}
          </Text>
          <Row paddingTop="s" horizontal="center">
            <Link href={certifications.path}>
              <Button size="s" variant="secondary" suffixIcon="arrowRight">
                View Certifications
              </Button>
            </Link>
          </Row>
        </Column>
      </Card>
    </Column>
  );
}