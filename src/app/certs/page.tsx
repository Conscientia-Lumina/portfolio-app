import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, certifications } from "@/resources";
import CertificationsView from "@/components/certifications/CertificationsView";

export async function generateMetadata() {
  return Meta.generate({
    title: certifications.title,
    description: certifications.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certifications.title)}`,
    path: certifications.path,
  });
}

export default function Certifications() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={certifications.path}
        title={certifications.title}
        description={certifications.description}
        image={`/api/og/generate?title=${encodeURIComponent(certifications.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {certifications.title}
      </Heading>
      {certifications.images && certifications.images.length > 0 && (
        <CertificationsView images={certifications.images} />
      )}
    </Column>
  );
}