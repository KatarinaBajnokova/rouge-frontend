import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  Drawer,
  Group,
  RangeSlider,
  ScrollArea,
  Text,
  Loader,
  Center,
} from '@mantine/core';
import PropTypes from 'prop-types';
import { useFilterOptions } from '@/react/hooks/useFilterOptions';
import {
  BackHeader,
  FilterIconButton,
} from '@/react/components/buttons/IconButtons';
import Pill from './Pill';
import styles from './FilterModal.module.scss';

const DIFF_COLORS = {
  easy: '#00ac70',
  moderate: '#005bc3',
  advanced: '#aa1da4',
  expert: '#ac003e',
};

const GRADIENT_STYLE = {
  background:
    'linear-gradient(to top, rgba(170, 29, 163, 0.9), rgba(170, 29, 163, 0.07))',
  borderColor: '#aa1da4',
  color: '#fff',
};

export default function FilterModal({
  opened,
  onClose,
  onApply,
  initialValues = {},
}) {
  const { data: opts = {}, isLoading } = useFilterOptions();
  const {
    selectedOccasions = [],
    selectedDetailed = [],
    selectedDifficulties = [],
    priceRange = [0, 100],
  } = initialValues;

  const [selOcc, setSelOcc] = useState(selectedOccasions);
  const [selDet, setSelDet] = useState(selectedDetailed);
  const [selDiff, setSelDiff] = useState(selectedDifficulties);
  const [price, setPrice] = useState(priceRange);

  useEffect(() => {
    setSelOcc(selectedOccasions);
    setSelDet(selectedDetailed);
    setSelDiff(selectedDifficulties);
    setPrice(priceRange);
  }, [selectedOccasions, selectedDetailed, selectedDifficulties, priceRange]);

  const handleApply = useCallback(() => {
    onApply({
      selectedOccasions: selOcc,
      selectedDetailed: selDet,
      selectedDifficulties: selDiff,
      priceRange: price,
    });
    onClose();
  }, [onApply, onClose, selOcc, selDet, selDiff, price]);

  const toggleItem = (item, list, setList) =>
    setList(prev =>
      prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]
    );

  const renderPills = (items, selected, setSelected) =>
    items?.map(item => {
      const checked = selected.includes(item);
      return (
        <Pill
          key={item}
          checked={checked}
          onClick={() => toggleItem(item, selected, setSelected)}
          style={checked ? GRADIENT_STYLE : {}}
        >
          {item}
        </Pill>
      );
    });

  const difficultyPills = useMemo(
    () =>
      opts.difficulties?.map(d => {
        const key = d.toLowerCase();
        const checked = selDiff.includes(d);
        const color = DIFF_COLORS[key] ?? DIFF_COLORS.advanced;

        const baseStyle = {
          borderColor: color,
          color: color,
        };

        const selectedStyle = {
          background: color,
          borderColor: color,
          color: '#fff',
        };

        return (
          <Pill
            key={d}
            checked={checked}
            onClick={() => toggleItem(d, selDiff, setSelDiff)}
            style={checked ? selectedStyle : baseStyle}
          >
            ✦ {d}
          </Pill>
        );
      }),
    [opts.difficulties, selDiff]
  );

  return (
    <Drawer
      className={styles.filterDrawer}
      opened={opened}
      onClose={onClose}
      title={null}
      size='sm'
      padding='md'
    >
      <BackHeader text='Filter' onBack={onClose} />

      {isLoading ? (
        <Center style={{ height: '80vh' }}>
          <Loader />
        </Center>
      ) : (
        <div className={styles.filterBody}>
          <ScrollArea className={styles.filterScroll}>
            <div className={styles.filterSection}>
              <Text className={styles.filterSectionTitle}>Select occasion</Text>
              <Group>{renderPills(opts.occasions, selOcc, setSelOcc)}</Group>
            </div>

            <div className={styles.filterSection}>
              <Text className={styles.filterSectionTitle}>
                Select more detailed
              </Text>
              <Group>
                {renderPills(opts.detailedOccasions, selDet, setSelDet)}
              </Group>
            </div>

            <div className={styles.filterSection}>
              <Text className={styles.filterSectionTitle}>
                Select difficulty
              </Text>
              <Group>{difficultyPills}</Group>
            </div>

            <div className={styles.filterSection}>
              <Text className={styles.filterSectionTitle}>
                Select your price range
              </Text>
              <RangeSlider
                className={styles.filterSlider}
                value={price}
                onChange={setPrice}
                min={priceRange[0]}
                max={priceRange[1]}
                step={0.01}
                marks={[
                  { value: priceRange[0], label: `€${priceRange[0]}` },
                  { value: priceRange[1], label: `€${priceRange[1]}` },
                ]}
                mb='md'
                styles={{
                  track: {
                    backgroundColor: 'rgba(170,29,164,0.2)',
                    height: 10,
                  },
                  bar: {
                    backgroundColor: '#aa1da4',
                    height: 10,
                  },
                  thumb: {
                    backgroundColor: '#aa1da4',
                    border: '3px solid #fbfbfb',
                    width: 24,
                    height: 24,
                  },
                  markLabel: {
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  },
                }}
              />
            </div>
          </ScrollArea>

          <div className={styles.filterFooter}>
            <FilterIconButton
              fullWidth
              onClick={handleApply}
              classNames={{ root: styles.filterApplyBtn }}
            >
              Filter
            </FilterIconButton>
          </div>
        </div>
      )}
    </Drawer>
  );
}

FilterModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    selectedOccasions: PropTypes.arrayOf(PropTypes.string),
    selectedDetailed: PropTypes.arrayOf(PropTypes.string),
    selectedDifficulties: PropTypes.arrayOf(PropTypes.string),
    priceRange: PropTypes.arrayOf(PropTypes.number),
  }),
};
