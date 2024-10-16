import { useState, useEffect } from 'react';
import { Chip, Group, Stack, Select } from '@mantine/core';
import '@mantine/core/styles.css';

interface MultipleChipProps {
  onSave: (selectedDays: number[]) => void;
}

function MultipleChip({ onSave }: MultipleChipProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  useEffect(() => {
    const daysArray = selectedDays.map(Number);
    console.log('Selected Days:', daysArray);
    onSave(daysArray);
  }, [selectedDays, onSave]); 

  return (
    <Stack style={{ rowGap: '10px' }}>
      <Select
        label="Выберите дни недели"
        description="Выберите дни, когда будет проходить мероприятие"
        data={[]} 
        rightSection={" "}
        styles={{
          input: {
            display: 'none',
          },
          dropdown: {
            display: 'none',
          },
        }}
      />

      <Chip.Group 
        multiple 
        value={selectedDays} 
        onChange={(value) => setSelectedDays(value as string[])}>
        
        <Group style={{ columnGap: '10px' }}>
          <Chip value="0">Понедельник</Chip>
          <Chip value="1">Вторник</Chip>
          <Chip value="2">Среда</Chip>
        </Group>
        
        <Group style={{ columnGap: '10px' }}>
          <Chip value="3">Четверг</Chip>
          <Chip value="4">Пятница</Chip>
          <Chip value="5">Суббота</Chip>
        </Group>
        
        <Group style={{ columnGap: '10px' }}>
          <Chip value="6">Воскресенье</Chip>
        </Group>
        
      </Chip.Group>
    </Stack>
  );
}

export { MultipleChip };
 