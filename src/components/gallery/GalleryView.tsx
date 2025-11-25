"use client";

import { useState } from "react";
import {
  Media,
  MasonryGrid,
  Column,
  Row,
  Flex,
  Heading,
  Text,
  Icon,
  Button,
} from "@once-ui-system/core";
import { gallery } from "@/resources";
import { GalleryCategory } from "@/types";
import styles from "./GalleryView.module.scss";

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get the selected category's images or show all if none selected
  const getDisplayImages = () => {
    if (!selectedCategory) {
      return null; // Show category cards
    }
    const category = gallery.categories.find((c) => c.id === selectedCategory);
    return category?.images || [];
  };

  const displayImages = getDisplayImages();

  // Render category cards
  const renderCategoryCards = () => (
    <div className={styles.categoryGrid}>
      {gallery.categories.map((category: GalleryCategory) => (
        <Column
          key={category.id}
          className={styles.categoryCard}
          onClick={() => setSelectedCategory(category.id)}
          padding="l"
          gap="m"
          radius="l"
          border="neutral-medium"
          borderStyle="solid"
          background="surface"
          style={{ cursor: "pointer" }}
        >
          <Row gap="m" vertical="center">
            {category.icon && (
              <Icon
                name={category.icon as any}
                size="l"
                onBackground="brand-medium"
              />
            )}
            <Heading as="h3" variant="heading-strong-m" className={styles.cardTitle}>
              {category.title}
            </Heading>
          </Row>
          {category.description && (
            <Text variant="body-default-s" onBackground="neutral-weak" className={styles.cardDescription}>
              {category.description}
            </Text>
          )}
          <Row gap="s" vertical="center">
            <Text variant="label-default-s" onBackground="neutral-weak">
              {category.images.length} feedback{category.images.length !== 1 ? "s" : ""}
            </Text>
            <Icon name="arrowRight" size="xs" onBackground="neutral-weak" />
          </Row>
        </Column>
      ))}
    </div>
  );

  // Render selected category images
  const renderCategoryImages = () => {
    const category = gallery.categories.find((c) => c.id === selectedCategory);
    if (!category || !displayImages) return null;

    return (
      <Column gap="l" fillWidth>
        <Row gap="m" vertical="center">
          <Button
            variant="tertiary"
            size="s"
            prefixIcon="arrowLeft"
            className={styles.backButton}
            onClick={() => setSelectedCategory(null)}
          >
            Back to categories
          </Button>
        </Row>
        <Row gap="m" vertical="center">
          {category.icon && (
            <Icon
              name={category.icon as any}
              size="l"
              onBackground="brand-medium"
            />
          )}
          <Heading as="h2" variant="heading-strong-l">
            {category.title}
          </Heading>
        </Row>
        {category.description && (
          <Text variant="body-default-m" onBackground="neutral-weak">
            {category.description}
          </Text>
        )}
        <MasonryGrid columns={2} s={{ columns: 1 }}>
          {displayImages.map((image, index) => (
            <Media
              enlarge
              priority={index < 6}
              sizes="(max-width: 560px) 100vw, 50vw"
              key={index}
              radius="m"
              aspectRatio={
                image.orientation === "horizontal"
                  ? "16 / 9"
                  : image.orientation === "vertical"
                  ? "3 / 4"
                  : undefined
              }
              src={image.src}
              alt={image.alt}
            />
          ))}
        </MasonryGrid>
      </Column>
    );
  };

  return (
    <Flex fillWidth direction="column" gap="xl">
      {selectedCategory ? renderCategoryImages() : renderCategoryCards()}
    </Flex>
  );
}
