import '@mantine/core/styles.css';
import { MantineProvider, Select, Group } from '@mantine/core';
import { MultipleChip } from './multipleChip';
import { Time } from './time';
import './App.css'

export default function App() {
  return (
    <MantineProvider>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', columnGap: '50px'}}>
        <Group style={{ columnGap: '50px'  }}>
          <Select
            label="Периодичность"
            description="Выберите периодичность мероприятия"
            placeholder="Периодичность"
            pb={150}
            data={['Единичное событие', 'Регулярное по дням недели']}
            w={300}
            required
          />
          </Group>
          <MultipleChip />
          <Time />
      </div>
    </MantineProvider>
  );
}
