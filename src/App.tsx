import { useState } from 'react';
import '@mantine/core/styles.css';
import { MantineProvider, Select, Group, Button } from '@mantine/core';
import { MultipleChip } from './multipleChip';
import { Time } from './time';
import './App.css';

export default function App() {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [periodicity, setPeriodicity] = useState<'regular' | 'once' | null>(null);
  const [startTime, setStartTime] = useState<{ hour: number; minute: number }>({ hour: 10, minute: 0 });
  const [endTime, setEndTime] = useState<{ hour: number; minute: number }>({ hour: 10, minute: 40 });

  const handleSave = () => {
    const result = {
      periodicity,
      daysOfWeek: selectedDays,
      startTime,
      endTime,
    };
    console.log('result:', result);
  };

  return (
    <MantineProvider>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', columnGap: '50px' }}>
        <Group style={{ columnGap: '50px' }}>
          <Select
            label="Периодичность"
            description="Выберите периодичность мероприятия"
            placeholder="Периодичность"
            pb={150}
            data={[
              { value: 'regular', label: 'Регулярно по дням недели' },
              { value: 'once', label: 'Единичное событие' },
            ]}
            value={periodicity || undefined}
            onChange={(value) => setPeriodicity(value as 'regular' | 'once')}
            w={300}
            required
          />
        </Group>
        <MultipleChip onSave={setSelectedDays} />
        <Time setStartTime={setStartTime} setEndTime={setEndTime} />
        <Button onClick={handleSave}>Сохранить</Button>
      </div>
    </MantineProvider>
  );
}
