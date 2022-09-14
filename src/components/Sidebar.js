import React from 'react';
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';
import Timer from './PromodoroTimer/Timer';
import Settings from './PromodoroTimer/Settings';
import { useState } from 'react';

export default function Sidebar() {
  const [showSettings, setShowSettings] = useState(true);

  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
      {showSettings ? <Settings /> : <Timer /> }
    </aside>
  )
}
