import React, { useState, useEffect } from 'react';
import {
  Drawer,
  Chip,
  Group,
  RangeSlider,
  Button,
  ScrollArea,
  Text,
  Loader,
  Center,
} from '@mantine/core';
import { useFilterOptions } from '@/react/hooks/useFilterOptions';

export default function FilterModal({
  opened,
  onClose,
  onApply,
  initialValues = {},
}) {
  const { data: opts, isLoading } = useFilterOptions();
  const [selOcc, setSelOcc] = useState(initialValues.selectedOccasions || []);
  const [selDet, setSelDet] = useState(initialValues.selectedDetailed || []);
  const [selDiff, setSelDiff] = useState(
    initialValues.selectedDifficulties || []
  );
  const [price, setPrice] = useState(initialValues.priceRange || [0, 100]);

  useEffect(() => {
    setSelOcc(initialValues.selectedOccasions || []);
    setSelDet(initialValues.selectedDetailed || []);
    setSelDiff(initialValues.selectedDifficulties || []);
    if (initialValues.priceRange) {
      setPrice(initialValues.priceRange);
    }
  }, [initialValues]);

  if (isLoading) {
    return (
      <Drawer
        opened={opened}
        onClose={onClose}
        title='Filter'
        size='sm'
        padding='md'
      >
        <Center style={{ height: 200 }}>
          <Loader />
        </Center>
      </Drawer>
    );
  }

  const apply = () => {
    onApply({
      selectedOccasions: selOcc,
      selectedDetailed: selDet,
      selectedDifficulties: selDiff,
      priceRange: price,
    });
    onClose();
  };

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title={<Text weight={600}>Filter</Text>}
      size='sm'
      padding='md'
    >
      <ScrollArea style={{ height: '80vh' }}>
        {/* Occasions */}
        <Text weight={500}>Select occasion</Text>
        <Group spacing='xs' mb='md'>
          {opts.occasions.map(o => (
            <Chip
              key={o}
              checked={selOcc.includes(o)}
              onChange={() =>
                setSelOcc(prev =>
                  prev.includes(o) ? prev.filter(x => x !== o) : [...prev, o]
                )
              }
            >
              {o}
            </Chip>
          ))}
        </Group>

        <Text weight={500}>Select more detailed</Text>
        <Group spacing='xs' mb='md'>
          {opts.detailedOccasions.map(d => (
            <Chip
              key={d}
              checked={selDet.includes(d)}
              onChange={() =>
                setSelDet(prev =>
                  prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
                )
              }
            >
              {d}
            </Chip>
          ))}
        </Group>

        <Text weight={500}>Select difficulty</Text>
        <Group spacing='xs' mb='md'>
          {opts.difficulties.map(d => (
            <Chip
              key={d}
              checked={selDiff.includes(d)}
              onChange={() =>
                setSelDiff(prev =>
                  prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
                )
              }
            >
              {d}
            </Chip>
          ))}
        </Group>

        <Text weight={500}>Select your price range</Text>
        <RangeSlider
          value={price}
          onChange={setPrice}
          min={initialValues.priceRange?.[0] ?? 0}
          max={initialValues.priceRange?.[1] ?? 100}
          step={0.01}
          marks={[
            {
              value: initialValues.priceRange?.[0] ?? 0,
              label: `€${initialValues.priceRange?.[0] ?? 0}`,
            },
            {
              value: initialValues.priceRange?.[1] ?? 100,
              label: `€${initialValues.priceRange?.[1] ?? 100}`,
            },
          ]}
          mb='md'
        />

        <Button fullWidth onClick={apply}>
          Filter
        </Button>
      </ScrollArea>
    </Drawer>
  );
}
