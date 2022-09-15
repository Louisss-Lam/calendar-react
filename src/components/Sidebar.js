import React from 'react';
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';
import Timer from './PromodoroTimer/Timer';
import Settings from './PromodoroTimer/Settings';
import { useState } from 'react';
import SettingsContext from './PromodoroTimer/SettingsContext';

export default function Sidebar() {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer /> }
      </SettingsContext.Provider>
    </aside>
  )
}
