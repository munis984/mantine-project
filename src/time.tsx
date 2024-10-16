import { useState } from 'react';
import { TimeInput } from '@mantine/dates';
import { rem, Group } from '@mantine/core';
import { IconClock } from '@tabler/icons-react';
import '@mantine/core/styles.css';

interface TimeProps {
  setStartTime: (time: { hour: number; minute: number }) => void;
  setEndTime: (time: { hour: number; minute: number }) => void;
}

function Time({ setStartTime, setEndTime }: TimeProps) {
  const [startTime, setStartTimeValue] = useState<string>('10:00');
  const [endTime, setEndTimeValue] = useState<string>('10:40');

  const handleStartTimeChange = (value: string) => {
    setStartTimeValue(value);
    const [hour, minute] = value.split(':').map(Number);
    setStartTime({ hour, minute });
  };

  const handleEndTimeChange = (value: string) => {
    setEndTimeValue(value);
    const [hour, minute] = value.split(':').map(Number);
    setEndTime({ hour, minute });
  };

  return (
    <Group style={{ columnGap: "40px" }}>
      <TimeInput
        label="Время начала"
        description="Введите время начала"
        leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={startTime}
        onChange={(event) => handleStartTimeChange(event.currentTarget.value)} // Use the event
        required
        w={200}
      />

      <TimeInput
        label="Время окончания"
        description="Введите время окончания"
        leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={endTime}
        onChange={(event) => handleEndTimeChange(event.currentTarget.value)} // Use the event
        required
        w={200}
      />
    </Group>
  );
}

export { Time };
