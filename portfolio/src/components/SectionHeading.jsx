import {Heading, Text, VStack} from '@astryxdesign/core';

export function SectionHeading({eyebrow, title, description}) {
  return (
    <VStack gap={2}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Heading level={2}>{title}</Heading>
      {description ? (
        <Text type="body" color="secondary">
          {description}
        </Text>
      ) : null}
    </VStack>
  );
}
