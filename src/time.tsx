import { useState } from 'react';
import { TimeInput } from '@mantine/dates';
import { rem, Group } from '@mantine/core';
import { IconClock } from '@tabler/icons-react';
import '@mantine/core/styles.css';

function Time() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  return (
    <Group style={{columnGap: "40px"}}>
      <TimeInput
        label="Время начала"
        description="Введите время начала"
        leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={startTime}
        onChange={(event) => setStartTime(event.currentTarget.value)} 
        required
        w={200}
      />

      <TimeInput
        label="Время окончания"
        description="Введите время окончания"
        leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={endTime}
        onChange={(event) => setEndTime(event.currentTarget.value)} 
        required
        w={200}
      />
    </Group>
  );
}

export { Time };
 