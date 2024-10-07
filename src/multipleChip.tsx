import { useState } from 'react';
import { Chip, Group, Stack, Select } from '@mantine/core';
import '@mantine/core/styles.css';

function MultipleChip() {
  const [days1, setDays1] = useState<string[]>([]);
  const [days2, setDays2] = useState<string[]>([]);
  const [day3, setDay3] = useState<string[]>([]);

  return (
    <Stack style={{rowGap: '10px'}}>
    <Select
        label="Выберите дни недели"
        description="Выберите дни, когда будет проходить мероприятие"
        data={[]}
        rightSection={" "}
        styles={{
          input: {
            display: 'none', // Hide the input (dropdown button)
          },
          dropdown:{
            display: 'none'
          }
        }}
      />

      <Chip.Group multiple value={days1} onChange={setDays1}>
        <Group style={{columnGap: '10px'}}>
          <Chip value="1">Понедельник</Chip>
          <Chip value="2">Вторник</Chip>
          <Chip value="3">Среда</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple value={days2} onChange={setDays2}>
        <Group style={{columnGap: '10px'}}>
          <Chip value="4">Четверг</Chip>
          <Chip value="5">Пятница</Chip>
          <Chip value="6">Суббота</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple value={day3} onChange={setDay3}>
        <Chip value="7">Воскресенье</Chip>
      </Chip.Group>
    </Stack>
  );
}

export { MultipleChip };
