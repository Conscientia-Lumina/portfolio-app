"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Row,
  Tag,
  Tooltip,
} from "@once-ui-system/core";
import { Client } from "@/utils/utils";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  clients?: string | Client[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  clients,
}) => {
  console.log('DEBUG ProjectCard - clients:', clients, 'type:', typeof clients);
  
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />
      <Column
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}
        {clients && (
          <Column gap="8">
            {typeof clients === "string" ? (
              <Text variant="body-default-m" onBackground="neutral-weak">
                <Text as="span" variant="label-strong-m">Clients: </Text>
                {clients}
              </Text>
            ) : (
              <Row wrap gap="8">
                {clients.map((client, index) => (
                  <span key={index} title={client.models}>
                    <Tag size="l" prefixIcon={client.icon}>
                      {client.name}
                    </Tag>
                  </span>
                ))}
              </Row>
            )}
          </Column>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Column>
    </Column>
  );
};
